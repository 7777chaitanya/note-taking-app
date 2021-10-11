import { doc, deleteDoc, collection, addDoc } from "firebase/firestore";

import { db } from "../firebase";

export default async function addToTrashCollection(roomId, noteToDelete) {
  const docRef = await addDoc(collection(db, "trash"), {
    ...noteToDelete,
  });
  await deleteDoc(doc(db, "notes", roomId));
}
