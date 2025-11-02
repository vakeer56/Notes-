const Notes = require("../model/notes");

// GET the list of Notes
const index = async (req, res) => {
  try {
    const notes = await Notes.find().populate("student_id", "name");
    res.status(200).json({
      success: true,
      count: notes.length,
      notes, // returns array of notes from DB
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching notes.",
      error: error.message, //returns a error message
    });
  }
};

// GET Notes of a single student
const show = async (req, res) => {
  try {
    const studentID = req.body.studentID;

    // Find notes that belong to this student
    const notes = await Notes.find({ student_id: studentID }).populate(
      "student_id",
      "name"
    );

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

//POST Notes
const store = async (req, res) => {
  try {
    const newNote = new Notes(req.body); // Mongoose creates a new document (an object) based on your notesSchema.
    const savedNote = await newNote.save(); //saves the note in the database

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
