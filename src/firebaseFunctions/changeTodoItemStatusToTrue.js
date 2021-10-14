import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

export default async function changeTodoItemStatusToTrue(name, id, checked, eachProject) {
    console.log(name, id, checked, eachProject.todoItems)
  const washingtonRef = doc(db, "projects", id);
  const itemToUpdate = eachProject.todoItems.find(item => item.name === name);
  itemToUpdate.checked = checked;

  console.log(eachProject.todoItems);


  await updateDoc(washingtonRef, {
    todoItems : eachProject.todoItems
  });
}
