const router = require('express').Router();
const contactEmail = require('@server/constants/contactEmail');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Send an email from contact form
router.post('/', async function (req, res) {
  try {
    const { email, message, nom, tel } = req.body;

    if (!email || !nom || !message || !tel)
      return res.status(400).json({ msg: 'Tous les champs doivent être remplis' });

    // Envoie un email avec lien pour reset le password
    const msg = {
      to: contactEmail,
      from: contactEmail,
      subject: `Nouveau message de ${nom} depuis le site SunGym`,
      text: `Nom : ${nom} <br /> Email: ${email} <br /> Numéro de tel: ${tel} <br /> Message: ${message}`,
      html: `Nom : ${nom} <br /> Email: ${email} <br /> Numéro de tel: ${tel} <br /> Message: ${message}`,
    };
    sgMail.send(msg).then(() => res.json(true), console.error);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
