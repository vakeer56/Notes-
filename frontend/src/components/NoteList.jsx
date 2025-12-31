
import NoteCard from "./NoteCard";

function NotesList({ notes }) {
    if (!notes.length) {
        return <p>No notes available</p>;
    }

    return (
        <div className="notes-grid">
            {notes
                .map(note => (
                    <NoteCard key={note._id} note={note} />
                ))}
        </div>
    );
}

export default NotesList;