export default function Note({ note, onDelete, setSelectedNote }) {
  
  const handleFViewerNoteSelect = () => {
    setSelectedNote(note); 
    console.log("note selected"); 
  
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
