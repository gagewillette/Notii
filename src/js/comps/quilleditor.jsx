import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "../../styles/quill.scss"
import "quill/dist/quill.snow.css"; // Import Quill styles


const QuillEditor = ({ value, onChange }) => {
  const editorContainerRef = useRef(null);
  const quillRef = useRef(null);


  useEffect(() => {
    if (editorContainerRef.current && !quillRef.current) {
      const quill = new Quill(editorContainerRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: []}],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
          ],
        },
      });

      quill.on("text-change", function (delta, oldDelta, source) {
        if (source === "user") {
          onChange(quill.root.innerHTML);
        }
      });

      quillRef.current = quill;
    }
  }, [onChange]);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current;
      const currentContent = editor.root.innerHTML;
      if (value !== currentContent) {
        // Prevent update loop
        const delta = editor.clipboard.convert(value);
        editor.setContents(delta, "silent");
      }
    }
  }, [value]);

  return <div ref={editorContainerRef} />;
};

export default QuillEditor;
