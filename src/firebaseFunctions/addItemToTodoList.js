import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";



import { db } from "../firebase";

export default async function addItemToTodoList(id, taskName) {
    const docRef = doc(db, "projects", id);
    await updateDoc(docRef, {
        todoItems: arrayUnion({checked : false, name : taskName})
      });
}






