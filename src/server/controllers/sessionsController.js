const { Session } = require('../database/models');

const createSession = (req, res) => {
  res.status(200).send(req.body);
};

const getSessions = (req, res) => {
  Session.findAll()
    .then((data) => {
      if (data.length > 0) {
        console.log(data.get({ plain: true }));
        res.status(200).send(data.get({ plain: true }));
      } else {
        res.status(400).send({ message: 'no entries found!' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: 'Internal Server Error' });
    });
};

module.exports = {
  createSession,
  getSessions
};
