// Throws an error if the currentUser does not exist on the request
function validateUser(req) {
  const user = req['currentUser'];
  if (!user) {
    throw new Error(
      'Vous devez être connecté pour faire cette requête. (Authorization: Bearer <token>)'
    );
  }
  return user;
}

// Catch async errors when awaiting promises
function runAsync(callback) {
  return (req, res, next) => {
    callback(req, res, next).catch(next);
  };
}

module.exports = { validateUser, runAsync };
