import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export async function isValidUUID(uuid) {
    const q = await getDocs(collection(db, "users"));
    let isValid = false;
    q.forEach((doc) => {
        if (doc.id.toString() === uuid) {
            isValid = true; // Set isValid to true if UUIDs match
        }
    });
    return isValid; 
}

