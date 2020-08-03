const router = require('express').Router();
const User = require('@server/models/userModel');
const auth = require('@server/api/middleware/auth');
const { updateCustomer } = require('@server/services/customers');

//
// Adds billing information to account for logged in user
// Private route
router.post('/facturation', auth, async (req, res) => {
  try {
    const { nom, prenom, adresse, ville, codePostal } = req.body;

    // Validation
    if (!nom || !prenom || !adresse || !ville || !codePostal)
      return res.status(400).json({ msg: 'Tous les champs doivent être remplis' });

    if (String(codePostal).length !== 5)
      return res.status(400).json({ msg: 'Code postal invalide.' });

    await User.updateOne(
      { _id: req.user }, // Filtre de la recherche
      {
        nom: nom,
        prenom: prenom,
        adresse: adresse,
        ville: ville,
        codePostal: codePostal,
      } // Mise à jour
    );

    // Updates on stripe too
    await updateCustomer(req.user);

    // Renvoie true si changements enregistrés
    res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// Adds/edit billing information to account for logged in user
// Private route
router.post('/informations', auth, async (req, res) => {
  try {
    const { email, nom, prenom, adresse, ville, codePostal } = req.body;

    // Validation
    if (!email || !nom || !prenom || !adresse || !ville || !codePostal)
      return res.status(400).json({ msg: 'Tous les champs doivent être remplis' });

    if (String(codePostal).length !== 5)
      return res.status(400).json({ msg: 'Code postal invalide' });

    await User.updateOne(
      { _id: req.user }, // Filtre de la recherche
      {
        email: email.toLowerCase(),
        nom: nom,
        prenom: prenom,
        adresse: adresse,
        ville: ville,
        codePostal: codePostal,
      } // Mise à jour
    );

    // Updates on stripe too
    await updateCustomer(req.user);

    // Renvoie true si changements enregistrés
    res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// Sets plan to account for logged in user
// Private route
router.post('/plan', auth, async (req, res) => {
  try {
    const { planId } = req.body;

    // Validation
    if (!planId) return res.status(400).json({ msg: "Aucun abonnement n'a été selectionné" });

    await User.updateOne(
      { _id: req.user }, // Filtre de la recherche
      { planId: planId } // Mise à jour
    );
    // Renvoie true si changements enregistrés
    res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// Gets account information for logged in user
// Private route
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
