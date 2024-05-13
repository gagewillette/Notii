import React, { useEffect, useState } from "react";
import Note from "./note";
import "../../../styles/fileviewer.scss";
import { deleteNote, addNote  } from "../../../backend/db/noteservice";


export default function FileViewer({notes, setSelectedNote}) {
  const [isMakingNewNote, setIsMakingNewNote] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");


  const handleSaveNote = () => {
    //add note to db
    addNote({
      title: newNoteTitle ? newNoteTitle : "New Note",
      content: "",
    });

    setIsMakingNewNote(false);
  };


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
            <Note note={note} onDelete={handleDeleteNote} setSelectedNote={setSelectedNote} />
          </li>
        ))}
      </ul>
    </div>
  );
}

