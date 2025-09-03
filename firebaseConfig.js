import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAB7sBhKUkUef-Eya7A8iDEXL1IJetknU0",
  authDomain: "typetech-8b6f2.firebaseapp.com",
  projectId: "typetech-8b6f2",
  storageBucket: "typetech-8b6f2.firebasestorage.app",
  messagingSenderId: "505183939122",
  appId: "1:505183939122:web:477a4a92919e0b957b6a2b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


