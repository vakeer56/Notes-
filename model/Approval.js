const mongoose = require("mongoose");

const approvalSchema = new mongoose.Schema( {
    note_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Note",
        required: true
    },
    admin_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Admin",
        required: true
    },
    decision: {
        type: String,
        enum: ["approved", "rejected"],
        default: "pending",
        required: true
    },
})

module.exports = mongoose.model("Approval", approvalSchema);