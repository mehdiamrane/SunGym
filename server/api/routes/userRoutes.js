const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('server/models/userModel');
const auth = require('server/api/middleware/auth');
const clientURL = require('server/constants/clientURL');
const contactEmail = require('server/constants/contactEmail');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//
// Registers a new user
//
router.post('/register', async (req, res) => {
  try {
    const { prenom, nom, email, password, passwordCheck } = req.body;
    // Validation
    if (!prenom || !nom || !email || !password || !passwordCheck)
      return res.status(400).json({ msg: 'Tous les champs doivent être remplis' });

    if (password.length < 5)
      return res.status(400).json({ msg: 'Le mot de passe doit faire au moins 5 caractères' });

    if (password !== passwordCheck)
      return res.status(400).json({ msg: 'Entrez deux fois votre mot de passe pour le vérifier' });

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser)
      return res.status(400).json({ msg: 'Un compte existe déjà avec cette adresse mail' });

    // Register the user
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(passwordCheck, salt);

    const newUser = new User({
      prenom: prenom,
      nom: nom,
      email: email.toLowerCase(),
      password: passwordHash,
      resetPasswordToken: null,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// Logs a user in
//
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password)
      return res.status(400).json({ msg: 'Tous les champs doivent être remplis' });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user)
      return res.status(400).json({ msg: "Aucun compte avec cette adresse mail n'a été trouvé" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Mot de passe invalide' });

    // Login the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      token: token,
      user: {
        id: user._id,
        prenom: user.prenom,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// Deletes a logged in user from DB
// Private route
router.delete('/delete', auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// Responds true if token is valid / false if invalid
//
router.post('/tokenisvalid', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.json(false);

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifiedToken) return res.json(false);

    const user = await User.findById(verifiedToken.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// Get an already logged in user
// Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json({ prenom: user.prenom, id: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Send reset password link
router.post('/forgot', async function (req, res) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user)
      return res.status(400).json({ msg: "Aucun compte avec cette adresse mail n'a été trouvé" });

    // Générer un token valable 24 heures
    const resetPasswordToken = jwt.sign({ email: email.toLowerCase() }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });
    // Sauvegarder le token dans le user sur bdd
    await User.updateOne({ _id: user._id }, { resetPasswordToken: resetPasswordToken });

    // Envoie un email avec lien pour reset le password
    const msg = {
      to: email.toLowerCase(),
      from: contactEmail,
      subject: 'Réinitialisez votre mot de passe',
      text: `Cliquez sur le lien ci-dessous (valide 24h) pour réinitialiser votre mot de passe <br /> ${clientURL}reset/${resetPasswordToken}`,
      html: `Cliquez sur le lien ci-dessous (valide 24h) pour réinitialiser le mot de passe <br /> ${clientURL}reset/${resetPasswordToken}`,
    };
    sgMail.send(msg).then(() => res.json(true), console.error);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Checks if user can access the reset password feature
router.get('/reset/:token', async (req, res) => {
  try {
    const resetPasswordToken = req.params.token;
    const user = await User.findOne({ resetPasswordToken: resetPasswordToken });

    if (!user)
      return res.status(400).json({ msg: 'Le lien de réinitialisation est invalide ou expiré' });

    try {
      jwt.verify(resetPasswordToken, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ msg: 'Le lien de réinitialisation est invalide ou expiré' });
    }

    res.json({
      email: user.email,
      message: 'Lien de réinitialisation accepté',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reset a user's password
router.post('/reset', async (req, res) => {
  try {
    const { email, password, passwordCheck } = req.body;

    // Validation
    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: 'Tous les champs doivent être remplis' });

    if (password.length < 5)
      return res.status(400).json({ msg: 'Le mot de passe doit faire au moins 5 caractères' });

    if (password !== passwordCheck)
      return res.status(400).json({ msg: 'Entrez deux fois votre mot de passe pour le vérifier' });

    // Finds the user from DB
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user)
      return res.status(400).json({ msg: 'Le lien de réinitialisation est invalide ou expiré' });

    // Updates the user's password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(passwordCheck, salt);

    const updatedUser = await User.updateOne(
      { _id: user._id },
      { password: passwordHash, resetPasswordToken: null }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
