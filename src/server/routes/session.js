const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.post('/create', controller.sessions.createSession);

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.status(200).send(req.params.id);
});

router.get('/', controller.landingMessage);

module.exports = router;
