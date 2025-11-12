const Notes = require("../model/Approval")

// UPDATE Notes - Approve or Reject by Admin
const updateStatus = async (req, res) => {
  try {
    const { noteId, status } = req.body;

    // Only allow specific statuses
    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status! Only 'approved' or 'rejected' allowed.",
      });
    }

    // Find the note and update its status
    const updatedNote = await Notes.findByIdAndUpdate(
      noteId,
      { status: status },
      { new: true } // returns the updated document
    );

    // If note not found
    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: `Note ${status} successfully!`,
      note: updatedNote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the note status.",
      error: error.message,
    });
  }
};

module.exports = { updateStatus };