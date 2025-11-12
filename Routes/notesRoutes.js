const express = require('express');
const router = express.Router();
const Note = require('../model/notes');
const { store } = require('../Controllers/notesController');
const { index } = require('../Controllers/notesController');
const { show } = require('../Controllers/notesController');
const { byDepartment } = require('../Controllers/notesController');
const { bySubject } = require('../Controllers/notesController');
const { byYear } = require('../Controllers/notesController');



router.post('/upload', store);
router.get('/allnotes', index);
router.get('/student/:studentID', show);
router.get('/department/:department', byDepartment);
router.get('/subject/:title', bySubject)
router.get('/year/:year', byYear);




module.exports = router;