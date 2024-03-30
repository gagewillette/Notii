import { db } from "../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const notesCollectionRef = collection(db, "notes");

export const addNote = async (note) => {
    console.log("adding note");
  await addDoc(notesCollectionRef, note);
};

export const getNotes = async () => {
  const data = await getDocs(notesCollectionRef);
  return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export const deleteNote = async (id) => {
  const noteDoc = doc(db, "notes", id);
  await deleteDoc(noteDoc);
};
