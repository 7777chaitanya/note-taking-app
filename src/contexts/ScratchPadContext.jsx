import React, { createContext, useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

export const ScratchPadContext = createContext();

export const ScratchPadProvider = ({ children }) => {
  const [scratchPad, setScratchPad] = useState("");
  console.log("scratchPad =>", scratchPad);

  useEffect(() => {
    const q = query(collection(db, "scratchpad"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const project = [];
      querySnapshot.forEach((doc) => {
        project.push({ ...doc.data(), id: doc.id });
      });
      setScratchPad(project[0]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { scratchPad, setScratchPad };

  return (
    <ScratchPadContext.Provider value={value}>
      {children}
    </ScratchPadContext.Provider>
  );
};
