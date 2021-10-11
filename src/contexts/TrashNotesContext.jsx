import React, { createContext, useEffect, useState } from "react";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from '../firebase';


export const TrashNotesContext = createContext();

export const TrashNotesProvider = ({ children }) => {
  const [trashNotes, setTrashNotes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "trash"),orderBy("modifiedTime", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const trashNotes = [];
      querySnapshot.forEach((doc) => {
          trashNotes.push({...doc.data(),id : doc.id});
      });
      setTrashNotes(trashNotes);
    });
    
      return () => {
        unsubscribe();
      }
  }, [])

  const value = { trashNotes, setTrashNotes };

  return <TrashNotesContext.Provider value={value}>{children}</TrashNotesContext.Provider>;
};
