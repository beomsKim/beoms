// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIHUNRq_-DhxBxHCOy6ixMVVD0cc_MS_E",
    authDomain: "port-gallery-104d7.firebaseapp.com",
    projectId: "port-gallery-104d7",
    storageBucket: "port-gallery-104d7.firebasestorage.app",
    messagingSenderId: "685147458596",
    appId: "1:685147458596:web:0c7d329482cb3eccb59cb1"
};

// const app = initializeApp(firebaseConfig);
// // export const storage = getStorage(app); // 이미지 저장소
// export const storage = getStorage(
//     app,
//     "gs://port-gallery-104d7.firebasestorage.app"
// );
// export const db = getFirestore(app);      // 데이터 장부

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);