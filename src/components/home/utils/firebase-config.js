import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore"
//import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCagH9US5dhRTJ3BzeV9cHjT-0-azE9yAc",
  authDomain: "codewithkunle.firebaseapp.com",
  projectId: "codewithkunle",
  storageBucket: "codewithkunle.appspot.com",
  messagingSenderId: "950620213121",
  appId: "1:950620213121:web:95ae6e564fdb1c901fe280",
  measurementId: "G-1D6TMFXD7Z"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export  const db =getFirestore(app)

