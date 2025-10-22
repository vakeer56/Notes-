mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Student",
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    file_url: {
        type: String
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    }
})

module.exports = mongoose.model("Note", notesSchema);