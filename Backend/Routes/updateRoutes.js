const express = require("express");
const router = express.Router();
const { updateStatus } = require("../Controllers/updateStatusController");

// Update note status (approve/reject)
router.patch("/updateStatus/:id", updateStatus );

module.exports = router;