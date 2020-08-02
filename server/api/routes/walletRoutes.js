const router = require('express').Router();
const {
  createSetupIntent,
  listPaymentMethods,
  getDefaultPaymentMethod,
  setDefaultPaymentMethod,
} = require('server/services/customers');
const auth = require('server/api/middleware/auth');

///////////////////////////////////////
///// Customers and Setup Intents /////
///////////////////////////////////////

// Save a card on the customer record with a SetupIntent
router.post('/', auth, async (req, res) => {
  const user = req.user;
  const setupIntent = await createSetupIntent(user);
  res.send(setupIntent);
});

// Retrieve all cards attached to a customer
router.get('/', auth, async (req, res) => {
  const user = req.user;
  const wallet = await listPaymentMethods(user);
  res.send(wallet.data);
});

// Retrieve default card attached to a customer
router.get('/default', auth, async (req, res) => {
  const user = req.user;
  const defaultCard = await getDefaultPaymentMethod(user);
  res.send(defaultCard);
});

// Updates default card attached to a customer
router.post('/default', auth, async (req, res) => {
  const user = req.user;
  const { payment_method } = req.body;
  const defaultCard = await setDefaultPaymentMethod(user, payment_method);
  res.send(defaultCard.data);
});

module.exports = router;
