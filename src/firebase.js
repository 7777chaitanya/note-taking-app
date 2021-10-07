import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1JFjaRDoameY_hZhyle-ZyZbf0dctSy0",
  authDomain: "note-taking-app-9a6a2.firebaseapp.com",
  projectId: "note-taking-app-9a6a2",
  storageBucket: "note-taking-app-9a6a2.appspot.com",
  messagingSenderId: "703348019992",
  appId: "1:703348019992:web:fd32ca8881b5b6fb0f046d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const db = getFirestore();
export const provider = new GoogleAuthProvider();
