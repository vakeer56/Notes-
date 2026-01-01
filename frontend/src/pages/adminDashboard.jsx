import { useEffect, useState } from "react";
import NoteCard from "./NoteCard"; 
function AdminPage() {
const [pendingNotes, setPendingNotes] = useState([]);
const [approvedNotes, setApprovedNotes] = useState([]);
const [rejectedNotes, setRejectedNotes] = useState([]);
const [error, setError] = useState("");
useEffect(() => {
fetch("http://localhost:5000/notes/pending")
.then((res) => res.json())
.then((data) => {
if (data.success) {
    setPendingNotes(data.pendingNotes);
    }
 })
.catch(() => {
setError("Failed to fetch pending notes");
});
  }, []);

  return (
    <div>
   
    <header> <h1>Admin Page</h1></header> 
 {error && <p>{error}</p>}

      <h1>Pending Notes</h1>

      {pendingNotes.length === 0 ? (
        <p>No pending notes</p>
      ) : (
        pendingNotes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))
      )}
    <hr />
      <h1>Approved Notes</h1>
    {approvedNotes.length === 0 ? (
        <p>No approved notes</p>
      ) : (
        approvedNotes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))
      )}

      <hr />
      <h1>Rejected Notes</h1>

      {rejectedNotes.length === 0 ? (
        <p>No rejected notes</p>
      ) : (
        rejectedNotes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))
      )}
    </div>
  );
}

export default AdminPage;
