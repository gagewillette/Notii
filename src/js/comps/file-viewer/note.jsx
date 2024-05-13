export default function Note({ note, onDelete }) {
  
  const handleFViewerNoteSelect = () => {
    console.log("note selected", note);
  };


  return (
    <div onClick={handleFViewerNoteSelect} className="note">
      <div className="note-header">
        <h2>{note.title}</h2>
        <button onClick={() => onDelete(note.id)}>🗑️</button>
      </div>

      <p>{note.content}</p>
    </div>
  );
}
