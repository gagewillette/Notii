import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.bubble.css";
import QuillEditor from "../comps/quilleditor";
import "../../styles/notes.scss";
import Mousetrap from "mousetrap";
import MicrophoneComponent from "../comps/microphone";
import FileViewer from "../comps/file-viewer/fviewer";
import { addNote, getNotes, deleteNote } from "../../backend/db/noteservice";


const NotesEditor = () => {
  const [content, setContent] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [notes, setNotes] = useState([]);

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
      content: "",
    });

    setIsMakingNewNote(false);
  };


  const startVoiceDictation = () => {
    console.log("start voice dictation");
    setIsRecording(true);
  };

  Mousetrap.bind(["command+s", "ctrl+s"], function () {
    console.log("user tried to save");
    return false;
  });

  return (
    <div className="editor-main">
      {/* This is the file viewer on the left side of the editor */}
      <FileViewer notes={notes} />

      <div className="editor-wrapper">
        <h2>Notii Editor</h2>

        {/* Placeholder of note content for now */}
        <div className="note-content">
          <p>{}</p>
        </div>

        {/*isRecording ? (
          <MicrophoneComponent />
        ) : (
          <h3 id="button-wrapper-text">
            Start typing below, or
            <button onClick={startVoiceDictation} id="start-ai-button">
              <h3>click me to start Notii AI</h3>
            </button>
          </h3>
        )*/}

        {/*
      <QuillEditor value={content} onChange={setContent} />
        */}
      </div>
    </div>
  );
};

export default NotesEditor;


const loadNotesToLocalStore = (notes) => {
  for (let i = 0; i < notes.length; i++) {
    localStorage.setItem(notes[i].id, JSON.stringify(notes[i]));
  }
};
