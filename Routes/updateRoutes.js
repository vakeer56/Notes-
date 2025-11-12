const express = require("express");
const router = express.Router();
const { updateStatus } = require("../Controllers/updateStatusController");

// Update note status (approve/reject)
router.patch("/updateStatusController",updateStatusController);

module.exports = router;
