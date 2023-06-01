
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
// Import the functions you need from the SDKs you need



import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAYg0bAkzosWAeQNTfp40BPCLy_9RLTeHk",
  authDomain: "react-hooks-blog-9bfdd.firebaseapp.com",
  projectId: "react-hooks-blog-9bfdd",
  storageBucket: "react-hooks-blog-9bfdd.appspot.com",
  messagingSenderId: "816147371698",
  appId: "1:816147371698:web:aab368fac50b9bbd9d5bab"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Your web app's Firebase configuration
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
    
  </React.StrictMode>
);

