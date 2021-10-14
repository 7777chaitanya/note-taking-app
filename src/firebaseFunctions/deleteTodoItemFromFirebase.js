import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

export default async function deleteTodoItemFromFirebase(name, id , eachProject) {
  const washingtonRef = doc(db, "projects", id);
  const newTodoList = eachProject.todoItems.filter(item => item.name !== name);

  console.log(eachProject.todoItems);


  await updateDoc(washingtonRef, {
    todoItems : newTodoList
  });
}
