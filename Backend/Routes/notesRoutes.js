const express = require("express");
const router = express.Router();

const {
  store,
  index,
  show,
  byDepartment,
  bySubject,
  byYear,
  pendingNotes,
  approvedNotes,
  rejectedNotes,
} = require("../Controllers/notesController");

const uploadMiddleware = require("../middleware/upload");

// Admin routes
router.get("/pending", pendingNotes);
router.get("/approved", approvedNotes);
router.get("/rejected", rejectedNotes);

// Notes routes
router.post("/upload", uploadMiddleware, store);
router.get("/allnotes", index);
router.get("/student/:studentID", show);
router.get("/department/:department", byDepartment);
router.get("/subject/:title", bySubject);
router.get("/year/:year", byYear);

module.exports = router;
