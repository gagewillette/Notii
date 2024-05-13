import React, { useEffect, useState } from "react";
import Note from "./note";
import "../../../styles/fileviewer.scss";


export default function FileViewer({notes}) {
  const [isMakingNewNote, setIsMakingNewNote] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");



  const handleCancelNote = () => {
    setIsMakingNewNote(false);
  };

  const AddNote = () => {
    setIsMakingNewNote(true);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
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
            <div className="new-note-fields">
              <input
                type="text"
                placeholder="Note Title"
                onChange={(e) => {
                  setNewNoteTitle(e.target.value);
                }}
              />
            </div>
            <div className="new-note-buttons">
              <button onClick={handleSaveNote}>Save</button>
              <button onClick={handleCancelNote}>Cancel</button>
            </div>
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

