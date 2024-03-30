import React, { useEffect, useState } from "react";
import Note from "./note";
import "../../../styles/fileviewer.scss";
import { addNote, getNotes } from "../../../backend/db/noteservice";

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
            <Note note={note} onDelete={handleDeleteNote} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddNoteButton() {
  return <button onClick={AddNote}>+</button>;
}


const handleDeleteNote = (id) => {
    console.log("Deleting note with id: " + id);
    //deleteNote(id);
};

const AddNote = () =>
{
    addNote({
        title: "New Note",
        content: "New Note Content",
    });
}