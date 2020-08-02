const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  resetPasswordToken: { type: String },
  nom: { type: String },
  prenom: { type: String },
  adresse: { type: String },
  ville: { type: String },
  codePostal: { type: Number, minlength: 5, maxlength: 5 },
  stripeCustomerId: { type: String },
  planId: { type: String },
  planStatus: { type: String },
});

module.exports = User = mongoose.model('users', userSchema);
