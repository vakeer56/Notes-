mongoose = require("mongoose");

const adminSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        trim: true
    },
    admin_id: {
        type: Number,
        required: true
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
    }

})

module.exports = mongoose.model("Admin", adminSchema);