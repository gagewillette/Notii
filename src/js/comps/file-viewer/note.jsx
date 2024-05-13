export default function Note({ note, onDelete }) {
  return (
    <div className="note">
      <div className="note-header">
        <h2>{note.title}</h2>
        <button onClick={() => onDelete(note.id)}>🗑️</button>
      </div>

      <p>{note.content}</p>
    </div>
  );
}
