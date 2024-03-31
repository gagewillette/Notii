import "../../../styles/notecomp.scss"

export default function Note({ note, onDelete }) {
    return (
      <div className="note">
        <h2 id="note-title">{note.title}</h2>
        <button id="note-delete-button" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    );
  }
  