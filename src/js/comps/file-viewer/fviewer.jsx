import React, { useEffect, useState } from "react";
import Note from "./note";

export default function FileViewer() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    };

    fetchNotes();
  }, []);

  return (
    <div className="file-viewer">
      <div className="file-viewer-header">
        <h1>Notes</h1>
        <AddNoteButton />
      </div>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <NoteComponent note={note} onDelete={handleDeleteNote} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddNoteButton() {
  return <button onClick={addNote}>Add Note</button>;
}


const AddNote = () =>
{
//add note logic
}