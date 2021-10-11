import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function changeNoteDocContent(value, roomId) {
  if(roomId){
  const docRef = doc(db, "notes", roomId);

  // Set the "capital" field of the city 'DC'
  await updateDoc(docRef, {
    content: value,
    modifiedTime : new Date()
  });
}
}
