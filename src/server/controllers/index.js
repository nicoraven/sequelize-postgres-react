const sessions = require('./sessionsController');
const classrooms = require('./classroomsController');

const landingMessage = (req, res) => {
  res.status(200).send({ message: 'Get all sessions.' });
};

module.exports = {
  landingMessage,
  sessions,
  classrooms
};
