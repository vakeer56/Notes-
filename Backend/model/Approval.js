const mongoose = require("mongoose");

const approvalSchema = new mongoose.Schema( {
    note_id: {
        type: Number,
        ref: "Note",
        required: true
    },
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true
    },
    decision: {
        type: String,
        enum: ["approved", "rejected", "pending"],
        default: "pending",
        required: true
    },
})

module.exports = mongoose.model("Approval", approvalSchema);