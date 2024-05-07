import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const notesCollectionRef = collection(db, "notes");

export const addNote = async (note) => {
  console.log("adding note");
  await addDoc(notesCollectionRef, note);
  RefreshPage();
};

export const getNotes = async () => {
  const data = await getDocs(notesCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const deleteNote = async (id) => {
  const noteDoc = doc(db, "notes", id);
  await deleteDoc(noteDoc);

  RefreshPage();
};

//this is so that when the db is updated, a new call is made and the users sees
//updated notes. will be called on each update.
function RefreshPage() {
  window.location.reload();
}
