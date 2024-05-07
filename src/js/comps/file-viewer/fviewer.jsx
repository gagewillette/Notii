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
      setNotes(fetchedNotes);
    };

    fetchNotes();
  }, []);

  const handleSaveNote = () => {
    console.log("Saving note: ");

    //add note to db
    addNote({
      title: newNoteTitle ? newNoteTitle : "New Note",
      content: newNoteContent,
    });

    setIsMakingNewNote(false);
  };

  const handleCancelNote = () => {
    console.log("Cancelling note");
    setIsMakingNewNote(false);
  };

  const AddNote = () => {
    setIsMakingNewNote(true);
  };

  const handleDeleteNote = (id) => {
    console.log("Deleting note with id: " + id);
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
            <input
              type="text"
              placeholder="Note Title"
              onChange={(e) => {
                setNewNoteTitle(e.target.value);
              }}
            />

            {/* probably remove this */}
            <textarea
              placeholder="Note Content"
              onChange={(e) => {
                setNewNoteContent(e.target.value);
              }}
            ></textarea>
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
