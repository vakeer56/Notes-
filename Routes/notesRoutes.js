const express = require('express');
const router = express.Router();
const Note = require('../model/notes')

router.post('/notes/upload', async(req, res) => {
    try {
        const {student_id, title, year, file_url} = req.body;

        if(!student_id || !title || !file_url){
            return res.status(400).json({ isSuccess: false, message: "Missing required Fields" });
        }

    const newNote = new Note({
        student_id,
        title,
        year,
        file_url,
    });

    await newNote.save();

    res.status(200).json({
        isSuccess: true,
        message: "Drive link saved successfully!",
        note_id: newNote._id,
    });
} catch (error) {
    console.error(error);
    res.status(500).json({ isSuccess: false, message: "Server error"})
}
});

module.exports = router