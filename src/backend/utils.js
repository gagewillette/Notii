import {collection, getDocs} from 'firebase/firestore';

export async function isValidUUID(uuid)
{
    const q = await getDocs(collection(db, "users"))
    q.forEach((doc) => {
        console.log(doc.id)
    })
}

