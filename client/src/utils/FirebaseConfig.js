import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyArB2JOOPTDQM_DrmpSfBrfVBwOk8UCYow",
  authDomain: "tokitalk-9a13c.firebaseapp.com",
  projectId: "tokitalk-9a13c",
  storageBucket: "tokitalk-9a13c.appspot.com",
  messagingSenderId: "942278858896",
  appId: "1:942278858896:web:a2b5c409c99288ba78a015",
  measurementId: "G-9R00NKKDXJ",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
