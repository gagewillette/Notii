import React, { useEffect, useState } from "react";
import Note from "./note";
import "../../../styles/fileviewer.scss";
import { addNote, getNotes, deleteNote } from "../../../backend/db/noteservice";
import { set } from "firebase/database";

export default function FileViewer() {
  const [notes, setNotes] = useState([]);
  const [isMakingNewNote, setIsMakingNewNote] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");

  //probaby remove this
  const [newNoteContent, setNewNoteContent] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await getNotes();

      //set notes in state
      setNotes(fetchedNotes);

      //load notes into local storage
      loadNotesToLocalStore(fetchedNotes);

      //cleanup local store
      return () => {
        localStorage.clear();
      };
    };

    fetchNotes();
  }, []);

  const handleSaveNote = () => {
    //add note to db
    addNote({
      title: newNoteTitle ? newNoteTitle : "New Note",
      content: newNoteContent,
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
            <Note note={note} onDelete={handleDeleteNote} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const loadNotesToLocalStore = (notes) => {
  for (let i = 0; i < notes.length; i++) {
    localStorage.setItem(notes[i].id, JSON.stringify(notes[i]));
  }
};
