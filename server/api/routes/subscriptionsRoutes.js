const router = require('express').Router();
const { createSubscription, listSubscriptions, listInvoices } = require('server/services/billing');
const auth = require('server/api/middleware/auth');

/////////////////////////////////////////
// Billing and Recurring Subscriptions //
/////////////////////////////////////////

// Create a and charge new Subscription
router.post('/', auth, async (req, res) => {
  const { planId, payment_method } = req.body;
  const user = req.user;
  const subscription = await createSubscription(user, planId, payment_method);
  res.send(subscription);
});

// Get all invoices for a customer's subscription
router.get('/invoices', auth, async (req, res) => {
  const user = req.user;
  const invoices = await listInvoices(user);
  res.send(invoices.data);
});

// Get all subscriptions for a customer
router.get('/', auth, async (req, res) => {
  const user = req.user;
  const subscriptions = await listSubscriptions(user);
  res.send(subscriptions.data);
});

module.exports = router;
