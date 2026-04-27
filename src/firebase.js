import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6OSmZDLUviRhbADH-GMHUvvYo7U6-w8",
  authDomain: "shree-laxmi-body-reparing.firebaseapp.com",
  projectId: "shree-laxmi-body-reparing",
  storageBucket: "shree-laxmi-body-reparing.appspot.com",
  messagingSenderId: "552738510423",
  appId: "1:552738510423:web:398e74bf73b19f18db3512",
  measurementId: "G-LH4FHXZC8D"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
