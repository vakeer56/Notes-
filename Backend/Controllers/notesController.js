const Notes = require("../model/notes");

// GET the list of all Notes
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

// GET Notes of a single student by id
const show = async (req, res) => {
  try {
    const studentID = req.params.studentID;

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

// POST Notes
const store = async (req, res) => {
  try {
    const {title, description, department, year, file_url} = req.body
    const newNote = new Notes({title, description, department, year: Number(year), file_url, student_id: req.user.id});
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

// GET notes by department
const byDepartment = async (req, res) => {
  try{
    const  department  = req.params.department;

    const notes = await Notes.find({department: department});
    if(notes.length==0){
      return res.status(404).json({message: "No notes found for this department"});
    }
    else{
      res.status(200).json({
        success: true,
        count : notes.length,
        notes});
    }
  } catch (error){
    res.status(500).json({message: "Error while fetching notes", error});
  }
};

// GET notes by subject
const bySubject = async (req, res) => {
  try{
    const subject = req.params.title;

    const notes = await Notes.find({title: subject});
    if(notes.length==0){
      return res.status(404).json({message: "No notes found for this subject"});
    }
    else{
      res.status(200).json({
        success: true,
        count : notes.length,
        notes});
    }
  } catch (error){
    res.status(500).json({message: "Error while fetching notes", error});
  }
};

// GET notes by year 
const byYear = async (req, res) => {
  try{
    const year = req.params.year;

    const notes = await Notes.find({year: year});
    if(notes.length==0){
      return res.status(404).json({message: "No notes found for this year"});
    }
    else{
      res.status(200).json({
        success: true,
        count : notes.length,
        notes});
    }
  } catch (error){
    res.status(500).json({message: "Error while fetching notes", error});
}
};

// GET pending notes
const pendingNotes = async (req, res) => {
  try{
    const pendingNotes = await Notes.find({status: "pending"}).populate("student_id", "title");

    if(pendingNotes.length === 0){
      return res.status(404).json({
        success: false,
        message: "No pending notes found"});
    }
    else{
      res.status(200).json({
        success: true,
        count : pendingNotes.length,
        pendingNotes});
    }
  } catch (error){
    res.status(500).json({
      success: false,
      message: "Error while fetching notes", error});
  }
};

module.exports = {index, store, show, byDepartment, bySubject, byYear, pendingNotes};