import React, { useEffect, useState } from "react";
import Note from "./note";
import "../../../styles/fileviewer.scss";
import { addNote, getNotes } from "../../../backend/db/noteservice";

export default function FileViewer() {
  const [notes, setNotes] = useState([]);
  const [isMakingNewNote, setIsMakingNewNote] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    };

    fetchNotes();
  }, []);

  const AddNote = () => {
    setIsMakingNewNote(true);
  
    //create a new note sub comp that is editable
  
    //add note to db
    addNote({
      title: "New Note",
      content: "New Note Content",
    });
  };


  const handleDeleteNote = (id) => {
    console.log("Deleting note with id: " + id);
    //deleteNote(id);
  };
  

  return (
    <div className="file-viewer">
      <div className="file-viewer-header">
        <h1>Notes</h1>
        <button onClick={AddNote}>+</button>
      </div>

      <ul>
        {isMakingNewNote && (
          <div className="new-note">
            <input type="text" placeholder="Note Title" />
            <textarea placeholder="Note Content"></textarea>
            <button onClick={handleSaveNote}>Save</button>
            <button onClick={handleCancelNote}>Cancel</button>
          </div>
        )}

        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} onDelete={handleDeleteNote} />
          </li>
        ))}
      </ul>
    </div>
  );
}


