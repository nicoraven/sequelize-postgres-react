const express = require('express');
const { classrooms } = require('../controllers');

const router = express.Router();

router.post('/create', classrooms.createClassroom);

router.get('/:id', classrooms.findClassroom);

router.put('/:id/active/:sessionId', classrooms.setSession);

router.get('/', classrooms.getClassrooms);

module.exports = router;
