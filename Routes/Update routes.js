const express = require("express");
const router = express.Router();
const notesController = require("../controller/notesController");

// Update note status (approve/reject)
router.patch("/updateStatus", notesController.updateStatus);

module.exports = router;
