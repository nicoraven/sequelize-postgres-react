const express = require('express');
const { sessions } = require('../controllers');

const router = express.Router();

router.post('/create', sessions.createSession);

router.get('/:id', (req, res) => {
  res.status(200).send(req.params.id);
});

router.get('/', sessions.getSessions);

module.exports = router;
