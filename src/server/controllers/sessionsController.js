const { Session, Classroom, Type, Recurrence } = require('../database/models');

const createSession = (req, res) => {
  console.log(req.body);
  Session.create(req.body)
    .then(session => res.status(200).send(session))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: 'Internal Server Error' });
    });
};

const getSessions = (req, res) => {
  Session.findAll({
    include: [
      {
        model: Classroom,
        as: 'classroom'
      },
      {
        model: Type,
        as: 'type'
      },
      {
        model: Recurrence,
        as: 'recurrence'
      }
    ]
  })
    .then((data) => {
      if (data.length > 0) {
        console.log(data);
        res.status(200).send(data);
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
