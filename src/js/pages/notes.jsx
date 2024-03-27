import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.bubble.css";
import QuillEditor from "../comps/quilleditor";
import "../../styles/notes.scss";
import Mousetrap from "mousetrap";
import MicrophoneComponent from "../comps/microphone";

const NotesEditor = () => {
  const [content, setContent] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const startVoiceDictation = () => {
    console.log("start voice dictation");
    setIsRecording(true);
  };

  Mousetrap.bind(["command+s", "ctrl+s"], function () {
    console.log("user tried to save");
    return false;
  });

  return (
    <div className="editor-wrapper">
      <h2>Notii Editor</h2>

      {isRecording ?( <MicrophoneComponent />) :
      (<h3 id="button-wrapper-text">
        Start typing below, or
        <button onClick={startVoiceDictation} id="start-ai-button">
          <h3>click me to start Notii AI</h3>
        </button>
      </h3> )
      }

      <QuillEditor value={content} onChange={setContent} />

    </div>

);
};

export default NotesEditor;
