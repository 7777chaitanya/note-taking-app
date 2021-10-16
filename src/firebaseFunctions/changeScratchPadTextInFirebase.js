import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function changeScratchPadTextInFirebase(content) {
  const washingtonRef = doc(db, "scratchpad", "QABvKj4yFWCvYXnNRmC2");

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    content: content,
  });
}
