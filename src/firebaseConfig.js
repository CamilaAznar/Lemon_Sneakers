
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5t2y55ZBGn54Rwsx-gAapWwba8-Q4ax8",
  authDomain: "lemon-sneakers.firebaseapp.com",
  projectId: "lemon-sneakers",
  storageBucket: "lemon-sneakers.appspot.com",
  messagingSenderId: "398437893846",
  appId: "1:398437893846:web:53c7270023794caafaeb77"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)