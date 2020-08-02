const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('x-auth-token');
    if (!token)
      return res
        .status(401)
        .json({ msg: "Aucun jeton d'authentification trouvé, autorisation refusée." });

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifiedToken)
      return res
        .status(401)
        .json({
          msg: "La vérification du jeton d'authentification a échoué, autorisation refusée.",
        });

    req.user = verifiedToken.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
