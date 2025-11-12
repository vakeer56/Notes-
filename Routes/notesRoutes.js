const express = require('express');
const router = express.Router();
const Note = require('../model/notes')
const { store } = require('../Controllers/notesController');

router.post('/notes/upload', store);



module.exports = router;