const sessions = require('./sessionsController');

const landingMessage = (req, res) => {
  res.status(200).send({ message: 'Get all sessions.' });
};

module.exports = {
  landingMessage,
  sessions
};
