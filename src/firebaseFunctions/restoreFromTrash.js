import { doc, deleteDoc, collection, addDoc } from "firebase/firestore";

import { db } from "../firebase";

export default async function restoreFromTrash(roomId, noteToRestore) {
  const docRef = await addDoc(collection(db, "notes"), {
    ...noteToRestore,modifiedTime : new Date()
  });
  await deleteDoc(doc(db, "trash", roomId));
}
