import React, { useEffect, useState } from "react";
import {}
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

  };

  return (
    <div className="file-viewer">
      <h1>Notes</h1>
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
