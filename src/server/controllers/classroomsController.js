const { Session, Classroom } = require('../database/models');
const { findAll, createOne, findOne } = require('../services/classroomServices');

const createClassroom = (req, res) => {
  console.log(req.body);
  createOne(req.body)
    .then(result => res.status(result.code).send({ message: result.data }))
    .catch((error) => {
      console.log('catch', error);
      res.status(500).send({ message: 'Internal Server Error' });
    });
};

const getClassrooms = (req, res) => {
  findAll()
    .then(result => res.status(result.code).send({ message: result.data }))
    .catch((error) => {
      console.log('catch', error);
      res.status(500).send({ message: 'Internal Server Error' });
    });
};

const findClassroom = (req, res) => {
  findOne(parseInt(req.params.id))
    .then(result => res.status(result.code).send({ message: result.data }))
    .catch((error) => {
      console.log('catch', error);
      res.status(500).send({ message: 'Internal Server Error' });
    });
};

const editClassroom = (req, res) => {
  Classroom.update(
    { name: req.body.name },
    { returning: true, include: { model: Session, as: 'session' }, where: { id: parseInt(req.params.id) } }
  )
    .then(([rowsUpdate, [data]]) => {
      console.log('updated', rowsUpdate);
      if (data) {
        console.log(data.id);
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

const deleteClassroom = (req, res) => {
  Classroom.destroy({ where: { id: parseInt(req.params.id) } })
    .then((data) => {
      if (data) {
        res.status(200).send({ success: data });
      } else {
        res.status(400).send({ message: 'no entries found!' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: 'Internal Server Error' });
    });
};

const setSession = (req, res) => {
  Classroom.update(
    { sessionId: parseInt(req.params.sessionId) },
    { returning: true, where: { id: parseInt(req.params.id) }, include: { model: Session } }
  )
    .then(([rowsUpdate, [data]]) => {
      console.log('updated', rowsUpdate);
      console.log(data);
      if (data) {
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

const clearSession = (req, res) => {
  Classroom.update(
    { sessionId: null },
    { returning: true, where: { id: parseInt(req.params.id) } }
  )
    .then(([rowsUpdate, [data]]) => {
      console.log('updated', rowsUpdate);
      // console.log(data);
      if (data) {
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
  createClassroom,
  getClassrooms,
  findClassroom,
  setSession,
  clearSession,
  editClassroom,
  deleteClassroom
};
