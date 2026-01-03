const Notes = require("../model/notes");

// GET all notes
const index = async (req, res) => {
  try {
    const notes = await Notes.find().populate("student_id", "name");
    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching notes.",
      error: error.message,
    });
  }
};

// GET notes of a single student
const show = async (req, res) => {
  try {
    const studentID = req.params.studentID;
    const notes = await Notes.find({ student_id: studentID })
      .populate("student_id", "name");

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while fetching student notes",
      error: error.message,
    });
  }
};

// POST note
const store = async (req, res) => {
  try {
    const { title, description, department, year, file_url } = req.body;

    const newNote = new Notes({
      title,
      description,
      department,
      year: Number(year),
      file_url,
      student_id: req.user.id,
      status: "pending",
    });

    const savedNote = await newNote.save();

    res.status(201).json({
      success: true,
      message: "Note added successfully!",
      note: savedNote,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Validation or save failed!",
      error: error.message,
    });
  }
};

// GET by department
const byDepartment = async (req, res) => {
  try {
    const department = req.params.department;
    const notes = await Notes.find({ department, approved: true });

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while fetching notes by department",
      error: error.message,
    });
  }
};

// GET by subject
const bySubject = async (req, res) => {
  try {
    const title = req.params.title;
    const notes = await Notes.find({ title, approved: true });

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while fetching notes by subject",
      error: error.message,
    });
  }
};

// GET by year
const byYear = async (req, res) => {
  try {
    const year = req.params.year;
    const notes = await Notes.find({ year, approved: true });

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while fetching notes by year",
      error: error.message,
    });
  }
};

// GET pending notes
const pendingNotes = async (req, res) => {
  try {
    const notes = await Notes.find({ status: "pending" })
      .populate("student_id", "name");

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while fetching pending notes",
      error: error.message,
    });
  }
};

// GET approved notes
const approvedNotes = async (req, res) => {
  try {
    const notes = await Notes.find({ status: "approved" })
      .populate("student_id", "name");

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while fetching approved notes",
      error: error.message,
    });
  }
};

// GET rejected notes
const rejectedNotes = async (req, res) => {
  try {
    const notes = await Notes.find({ status: "rejected" })
      .populate("student_id", "name");

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while fetching rejected notes",
      error: error.message,
    });
  }
};

module.exports = {
  index,
  store,
  show,
  byDepartment,
  bySubject,
  byYear,
  pendingNotes,
  approvedNotes,
  rejectedNotes,
};
