/////////////////////////
// Home of node server //
/////////////////////////
require('module-alias/register');

// Env variables from .env (disabled if in prod)
const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const next = require('next');

const formData = require('express-form-data');

// Listening to PORT
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const bodyParser = require('body-parser');

// Initialize and export Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET);
module.exports = stripe;

// Set up mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    else console.log('MongoDB connection established...');
  }
);

app.prepare().then(() => {
  // Set up express server
  const server = express();
  // Convert incoming body from string to json
  server.use(express.json());
  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  server.use(bodyParser.json());
  // form data for files
  server.use(formData.parse());
  // cors for file upload and JWT... Authorize any URL to access the API (like the front-end app)
  server.use(cors({ origin: true }));

  // Sets rawBody for webhook handling
  server.use(
    express.json({
      verify: (req, res, buffer) => (req['rawBody'] = buffer),
    })
  );

  // Set up routes
  server.use('/users', require('server/api/routes/userRoutes'));
  server.use('/wallet', require('server/api/routes/walletRoutes'));
  server.use('/subscriptions', require('server/api/routes/subscriptionsRoutes'));
  server.use('/hooks', require('server/api/routes/hooksRoutes'));
  server.use('/account', require('server/api/routes/accountRoutes'));
  server.use('/mail', require('server/api/routes/mailRoutes'));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, () => console.log(`The server has started on port ${PORT}...`));
});
