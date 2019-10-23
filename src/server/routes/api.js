const express = require('express');
const sessionRoutes = require('./session');
const classroomRoutes = require('./classroom');

const router = express.Router();

router.use('/classrooms', classroomRoutes);
router.use('/sessions', sessionRoutes);

router.get('/', (req, res) => {
  res.status(200).send({ message: 'In the api route.' });
});

module.exports = router;
