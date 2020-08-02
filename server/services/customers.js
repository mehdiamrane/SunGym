const stripe = require('server/app');
const User = require('server/models/userModel');

// Creates a SetupIntent used to save a credit card for later use
async function createSetupIntent(userId) {
  const customer = await getOrCreateCustomer(userId);
  return stripe.setupIntents.create({
    customer: customer.id,
  });
}

// Returns all payment sources associated to the user
async function listPaymentMethods(userId) {
  const customer = await getOrCreateCustomer(userId);
  return stripe.paymentMethods.list({
    customer: customer.id,
    type: 'card',
  });
}

// Returns a user's default payment method
async function getDefaultPaymentMethod(userId) {
  const customer = await getOrCreateCustomer(userId);
  return customer.invoice_settings.default_payment_method;
}

// Attaches a payment method to the Stripe customer,
async function setDefaultPaymentMethod(userId, payment_method) {
  const customer = await getOrCreateCustomer(userId);

  // Attach the  payment method to the customer
  await stripe.paymentMethods.attach(payment_method, { customer: customer.id });
  // Set it as the default payment method
  const updatedCustomer = await stripe.customers.update(customer.id, {
    invoice_settings: { default_payment_method: payment_method },
  });
  // Gets the updated default payment method from stripe
  const defaultPaymentMethod = updatedCustomer.invoice_settings.default_payment_method;

  return defaultPaymentMethod;
}

// Gets the exsiting Stripe customer or creates a new record
async function getOrCreateCustomer(userId, params) {
  const user = await User.findById(userId);
  const { stripeCustomerId, email, nom, prenom, adresse, ville, codePostal } = user || {};

  // If missing customerID, create it
  if (!stripeCustomerId) {
    // CREATE new customer
    const customer = await stripe.customers.create({
      email: email.toLowerCase(),
      name: `${prenom} ${nom}`,
      address: {
        line1: adresse,
        city: ville,
        postal_code: codePostal,
      },
      // },
      // shipping: {
      //   address: {
      //     line1: adresse,
      //     city: ville,
      //     postal_code: codePostal,
      //   },
      //   name: `${prenom} ${nom}`,
      // },
      preferred_locales: ['fr', 'en'],
      metadata: {
        mongodbID: userId,
      },
      ...params,
    });
    await User.updateOne(
      { _id: userId }, // Filtre de la recherche
      { stripeCustomerId: customer.id } // Mise à jour
    );
    return customer;
  } else {
    return await stripe.customers.retrieve(stripeCustomerId);
  }
}

// Gets the exsiting Stripe customer or creates a new record
async function updateCustomer(userId, params) {
  const user = await User.findById(userId);
  const { stripeCustomerId, email, nom, prenom, adresse, ville, codePostal } = user || {};

  const updatedCustomer = await stripe.customers.update(stripeCustomerId, {
    email: email,
    name: `${prenom} ${nom}`,
    address: {
      line1: adresse,
      city: ville,
      postal_code: codePostal,
    },
    // },
    // shipping: {
    //   address: {
    //     line1: adresse,
    //     city: ville,
    //     postal_code: codePostal,
    //   },
    //   name: `${prenom} ${nom}`,
    // },
    preferred_locales: ['fr', 'en'],
    metadata: {
      mongodbID: userId,
    },
    ...params,
  });

  return updatedCustomer;
}

module.exports = {
  createSetupIntent,
  listPaymentMethods,
  getDefaultPaymentMethod,
  setDefaultPaymentMethod,
  getOrCreateCustomer,
  updateCustomer,
};
