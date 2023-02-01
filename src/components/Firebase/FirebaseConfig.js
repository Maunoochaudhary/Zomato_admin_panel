// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB1ASAKhnEup1-UbNfsTLW93BizOucwpPg",
    authDomain: "zomato-c34a4.firebaseapp.com",
    projectId: "zomato-c34a4",
    storageBucket: "zomato-c34a4.appspot.com",
    messagingSenderId: "977374853052",
    appId: "1:977374853052:web:89f158106edd6a983e5db9",
    measurementId: "G-2ZP8DPL5QV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { storage, db };
