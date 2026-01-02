import axios from "axios";

function AdminNoteCard({ note, onAction }) {

    const updateStatus = async (status) => {
        try {
            await axios.post(
                `http://localhost:5000/notes/update-status/${note.note_id}`,
                { status: status }
            );
            onAction(note._id);
        } catch (err) {
            console.error("Error updating note status", err);
        }
    };

    return (
        <div className="note-card">
            <h3>{note.title}</h3>

            <p><b>Description:</b> {note.description}</p>
            <p><b>Department:</b> {note.department}</p>
            <p><b>Year:</b> {note.year}</p>

            <a href={note.file_url} target="_blank" rel="noreferrer">
                View Notes
            </a>

            <div style={{ marginTop: "10px" }}>
                <button
                    onClick={() => updateStatus("approved")}
                    style={{ background: "green", color: "white", marginRight: "10px" }}
                >
                    Approve
                </button>

                <button
                    onClick={() => updateStatus("rejected")}
                    style={{ background: "orange", color: "white" }}
                >
                    Update Status
                </button>
            </div>
        </div>
    );
}

export default AdminNoteCard;
