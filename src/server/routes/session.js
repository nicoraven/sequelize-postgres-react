const express = require('express');

const router = express.Router();

router.post('/create', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.status(200).send(req.params.id);
});

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Get all sessions' });
});

module.exports = router;
