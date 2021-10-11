import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";


export default async function deleteNoteFromFirestore(roomId){
    await deleteDoc(doc(db, "notes", roomId));

}