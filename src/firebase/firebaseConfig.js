import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABX2UpFjcFTlGMoMu24e4DTRGBnGTfnBE",
  authDomain: "microproyecto2-morillo-spiotta.firebaseapp.com",
  projectId: "microproyecto2-morillo-spiotta",
  storageBucket: "microproyecto2-morillo-spiotta.appspot.com",
  messagingSenderId: "608411644688",
  appId: "1:608411644688:web:f9c9d85c1e2b1e67446b95",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
