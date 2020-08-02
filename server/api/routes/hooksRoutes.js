const router = require('express').Router();
const { runAsync } = require('server/services/helpers');
const { handleStripeWebhook } = require('server/services/webhooks');

//////////////////////////////////
///// Handle Stripe webhooks /////
//////////////////////////////////

router.post('/', runAsync(handleStripeWebhook));

module.exports = router;
