const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    department: {
        type: String
    },
    year: {
        type: Number
    }
}) 

module.exports = mongoose.model("Student", studentSchema);