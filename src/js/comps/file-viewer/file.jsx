import React from "react";
import { v4 as uuidv4 } from "uuid";

//file component
export default function FileEntry(notefile) {
  return (
    <>
      <div className="file">
        <h3>{notefile.name}</h3>
      </div>
    </>
  );
}

//file class
export class NoteFile {
  constructor(name, body) {
    this.id = uuidv4();
    this.name = name;
    this.dateCreated = new Date();
    this.body = body;
  }
}
