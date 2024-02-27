import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.bubble.css";
import QuillEditor from "../comps/quilleditor";
import "../../styles/notes.scss";
import Mousetrap from "mousetrap";

const NotesEditor = () => {
  const [content, setContent] = useState("");

  Mousetrap.bind(["command+s", "ctrl+s"], function () {
    console.log("user tried to save");

    return false;
  });

  return (
    <div className="editor-wrapper">
      <h2>Notii Editor</h2>
      <h3 id="button-wrapper-text">
        Start typing below, or
        <button id="start-ai-button">
          <h3>click me to start Notii AI</h3>
        </button>
      </h3>
      <QuillEditor value={content} onChange={setContent} />
    </div>
  );
};

export default NotesEditor;
