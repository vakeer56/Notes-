import './NoteCard.css'

function NoteCard({ note }){
    return(
        <>
        <div className="note-card">
            <h3 className="note-title">{note.title}</h3>

            <p className="note-desc">
                Description: {note.description}
            </p>

            <div className="note-meta">
                <span>Department: {note.department}</span><br/>
                <span>Year: {note.year}</span>
            </div>

            <a href={note.file_url} className="view-btn">View Notes</a>
        </div>
        </>
    );
}

export default NoteCard