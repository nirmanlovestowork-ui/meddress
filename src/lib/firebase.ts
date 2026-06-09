import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7MO5wXWAYgxMDZlILkJR4zyFy0YCK0gQ",
  authDomain: "meddress-website.firebaseapp.com",
  projectId: "meddress-website",
  storageBucket: "meddress-website.firebasestorage.app",
  messagingSenderId: "11582185269",
  appId: "1:11582185269:web:dc4d86c851e6060f8c367c",
  measurementId: "G-JKDLSQLF3F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
