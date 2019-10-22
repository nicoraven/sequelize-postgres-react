const express = require('express');
const sessionRoutes = require('./session');

const router = express.Router();

router.use('/sessions', sessionRoutes);

router.get('/', (req, res) => {
  res.status(200).send({ message: 'In the api route.' });
});

module.exports = router;
