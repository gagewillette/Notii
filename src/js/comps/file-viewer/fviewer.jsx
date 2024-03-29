import React from "react";
import { useState } from "react";
import {NoteFile} from "./file.jsx";
import FileComp from "./file.jsx";


export default function FileViewer() {
  const files = useState([]);

  files.push(new NoteFile("file1", "this is file 1"));

return (
    <div className="file-viewer">
        <h1>File Viewer</h1>
        <ul>
            {files.map((file) => {
                return <li key={file.id}><FileComp notefile={file} /></li>;
            })}
        </ul>
    </div>
);
}
