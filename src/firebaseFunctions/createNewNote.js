import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


export default async function createNewNote() {
  const docRef = await addDoc(collection(db, "notes"), {
    title: "Untitled",
    content: "",
    creationTime: new Date(),
    modifiedTime: new Date(),
  });
}
