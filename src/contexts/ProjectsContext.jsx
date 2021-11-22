import React, { createContext, useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "projects"),
      orderBy("modifiedTime", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const project = [];
      querySnapshot.forEach((doc) => {
        project.push({ ...doc.data(), id: doc.id });
      });
      setProject(project);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { project, setProject };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};
