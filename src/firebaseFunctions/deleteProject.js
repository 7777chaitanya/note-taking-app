import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function deleteProjectDocument(id) {
  await deleteDoc(doc(db, "projects", id));
}
