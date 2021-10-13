import { doc, deleteDoc, collection, addDoc } from "firebase/firestore";

import { db } from "../firebase";

export default async function addNewProject(projectName) {
  const docRef = await addDoc(collection(db, "projects"), {
    name : projectName,
    modifiedTime : new Date(),
    todoItems : []
  });
}
