import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import QuillEditor from "../comps/quilleditor";
import "../../styles/notes.scss";

const NotesEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div className="editor-wrapper">
      <h2>Notii Editor</h2>
      <QuillEditor value={content} onChange={setContent} />
      <div>
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default NotesEditor;
