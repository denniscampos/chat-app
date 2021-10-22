import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo9u2CjEcPJteSB8Kkg7pO9A1zAnuvoXE",
  authDomain: "chat-app-e4374.firebaseapp.com",
  projectId: "chat-app-e4374",
  storageBucket: "chat-app-e4374.appspot.com",
  messagingSenderId: "782725183339",
  appId: "1:782725183339:web:9021e63e9fcc63e684be2e",
  measurementId: "G-PGTEEG05GD",
};

const app = initializeApp(firebaseConfig);

export default getFirestore();
export { app };
