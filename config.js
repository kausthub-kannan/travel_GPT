import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA60jF8lG-1d269_nnzT6-m8eZu-DbExF8",
    authDomain: "travelgpt-b5a70.firebaseapp.com",
    projectId: "travelgpt-b5a70",
    storageBucket: "travelgpt-b5a70.appspot.com",
    messagingSenderId: "552314231158",
    appId: "1:552314231158:web:735b2a434255655fbac257",
    measurementId: "G-LQMLBMN49W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db}