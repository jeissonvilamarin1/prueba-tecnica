import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKAXJAZoxF8pe0efWVjAyYFPRvSIhZzl8",
  authDomain: "prueba-tecnica2.firebaseapp.com",
  projectId: "prueba-tecnica2",
  storageBucket: "prueba-tecnica2.appspot.com",
  messagingSenderId: "362387670429",
  appId: "1:362387670429:web:4e89aa0ad4cf9db5e85b74",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export{
  app,
  db
}