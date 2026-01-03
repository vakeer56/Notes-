import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

function AdminPage() {
  const [pendingNotes, setPendingNotes] = useState([]);
  const [approvedNotes, setApprovedNotes] = useState([]);
  const [rejectedNotes, setRejectedNotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotes = async (url, setter, errorMsg) => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.success) {
          setter(data.notes);
        }
      } catch {
        setError(errorMsg);
      }
    };

    fetchNotes(
      "http://localhost:5000/notes/pending",
      setPendingNotes,
      "Failed to fetch pending notes"
    );

    fetchNotes(
      "http://localhost:5000/notes/approved",
      setApprovedNotes,
      "Failed to fetch approved notes"
    );

    fetchNotes(
      "http://localhost:5000/notes/rejected",
      setRejectedNotes,
      "Failed to fetch rejected notes"
    );
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Pending Notes</h2>
      {pendingNotes.length === 0
        ? <p>No pending notes</p>
        : pendingNotes.map(note => (
            <NoteCard key={note._id} note={note} />
          ))}

      <hr />

      <h2>Approved Notes</h2>
      {approvedNotes.length === 0
        ? <p>No approved notes</p>
        : approvedNotes.map(note => (
            <NoteCard key={note._id} note={note} />
          ))}

      <hr />

      <h2>Rejected Notes</h2>
      {rejectedNotes.length === 0
        ? <p>No rejected notes</p>
        : rejectedNotes.map(note => (
            <NoteCard key={note._id} note={note} />
          ))}
    </div>
  );
}

export default AdminPage;
