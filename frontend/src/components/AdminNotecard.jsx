import axios from "axios";

function AdminNoteCard({ note, onAction }) {

    const approveNote = async () => {
        try {
            await axios.post(
                `http://localhost:5000/notes/approve/${note.note_id}`
            );
            onAction(note.note_id);
        } catch (err) {
            console.error("Error approving note", err);
        }
    };

    const rejectNote = async () => {
        try {
            await axios.post(
                `http://localhost:5000/notes/reject/${note.note_id}`
            );
            onAction(note.note_id);
        } catch (err) {
            console.error("Error rejecting note", err);
        }
    };

    return (
        <div className="note-card">
            <h3>{note.title}</h3>

            <p><b>Description:</b> {note.description}</p>
            <p><b>Department:</b> {note.department}</p>
            <p><b>Year:</b> {note.year}</p>

            <a
                href={note.file_url}
                target="_blank"
                rel="noreferrer"
            >
                View Notes
            </a>

            <div style={{ marginTop: "10px" }}>
                <button
                    onClick={approveNote}
                    style={{ background: "green", color: "white", marginRight: "10px" }}
                >
                    Approve
                </button>

                <button
                    onClick={rejectNote}
                    style={{ background: "red", color: "white" }}
                >
                    Reject
                </button>
            </div>
        </div>
    );
}

export default AdminNoteCard;
