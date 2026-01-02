import { useEffect, useState } from "react";
import axios from "axios";
import AdminNoteCard from "../components/AdminNoteCard";

function ApproveNotes() {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPendingNotes = async () => {
        try {
            const res = await axios.get("http://localhost:5000/notes/pending");
            setNotes(res.data.notes);
        } catch (err) {
            console.error("Error fetching pending notes", err);
        } finally {
            setLoading(false);
        }
    };

    const removeNoteFromUI = (note_id) => {
        setNotes(notes.filter(note => note.note_id !== note_id));
    };

    useEffect(() => {
        getPendingNotes();
    }, []);

    return (
        <>
            <h1>Approve / Reject Notes</h1>

            {loading ? (
                <p>Loading pending notes...</p>
            ) : notes.length === 0 ? (
                <p>No pending notes</p>
            ) : (
                <div className="notes-container">
                    {notes.map(note => (
                        <AdminNoteCard
                            key={note.note_id}
                            note={note}
                            onAction={removeNoteFromUI}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default ApproveNotes;
