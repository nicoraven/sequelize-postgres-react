const { findAll, createOne, findOne, updateOne, destroyOne } = require('../services/classroomServices');

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
  updateOne(req.body, parseInt(req.params.id))
    .then(result => res.status(result.code).send({ message: result.data }))
    .catch((error) => {
      console.log('catch', error);
      res.status(500).send({ message: 'Internal Server Error' });
    });
};

const deleteClassroom = (req, res) => {
  destroyOne(parseInt(req.params.id))
    .then(result => res.status(result.code).send({ message: result.data }))
    .catch((error) => {
      console.log('catch', error);
      res.status(500).send({ message: 'Internal Server Error' });
    });
};

module.exports = {
  createClassroom,
  getClassrooms,
  findClassroom,
  editClassroom,
  deleteClassroom
};
