const stripe = require('server/app');
const { getOrCreateCustomer } = require('server/services/customers');
const User = require('server/models/userModel');

// Attaches a payment method to the Stripe customer,
// subscribes to a Stripe plan
// and saves the plan to Firestore
async function createSubscription(userId, plan, payment_method) {
  const customer = await getOrCreateCustomer(userId);

  // Attach the  payment method to the customer
  await stripe.paymentMethods.attach(payment_method, { customer: customer.id });

  // Set it as the default payment method
  await stripe.customers.update(customer.id, {
    invoice_settings: { default_payment_method: payment_method },
  });

  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ plan }],
    expand: ['latest_invoice.payment_intent'],
  });

  const invoice = subscription.latest_invoice;
  const payment_intent = invoice.payment_intent;

  // Update the user's status
  if (payment_intent.status === 'succeeded') {
    await User.updateOne(
      { _id: userId }, // Filtre de la recherche
      { stripeCustomerId: customer.id, planStatus: 'Actif' } // Mise à jour
    );
  }

  return subscription;
}

// Returns all the subscriptions linked to a Firebase userID in Stripe
async function listSubscriptions(userId) {
  const customer = await getOrCreateCustomer(userId);
  const subscriptions = await stripe.subscriptions.list({
    customer: customer.id,
  });

  return subscriptions;
}

// Returns all the invoices linked to a Firebase userID in Stripe
async function listInvoices(userId) {
  const customer = await getOrCreateCustomer(userId);
  const invoices = await stripe.invoices.list({
    customer: customer.id,
  });

  return invoices;
}

module.exports = { createSubscription, listSubscriptions, listInvoices };
