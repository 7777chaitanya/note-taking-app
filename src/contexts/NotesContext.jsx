import React, { createContext, useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';


export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "notes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notes = [];
      querySnapshot.forEach((doc) => {
          notes.push({...doc.data(),id : doc.id});
      });
      setNotes(notes);
    });
    
      return () => {
        unsubscribe();
      }
  }, [])

  const value = { notes, setNotes };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
