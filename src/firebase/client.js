import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAkEcJykT5ODBweO3j65IhNtROl9ZltV64",
  authDomain: "coder-gomez.firebaseapp.com",
  projectId: "coder-gomez",
  storageBucket: "coder-gomez.appspot.com",
  messagingSenderId: "81543561863",
  appId: "1:81543561863:web:3f0a68000fe4c811edae22",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
