import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD3YRZwQcy1lRD-zXhN4cjwywZ22W_iCiY",
    authDomain: "esummit-ig.firebaseapp.com",
    projectId: "esummit-ig",
    storageBucket: "esummit-ig.appspot.com",
    messagingSenderId: "605523211147",
    appId: "1:605523211147:web:4c2f2b12b32da26adab58e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;