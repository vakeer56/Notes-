mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    note_id: {
            type: Number,
            required: true
        },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    file_url: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    remark: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Note", notesSchema);