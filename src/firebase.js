
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8MBbO9R8n7tM0yYkZP7rYTiNjryv0_xk",
  authDomain: "technocruise23.firebaseapp.com",
  projectId: "technocruise23",
  storageBucket: "technocruise23.appspot.com",
  messagingSenderId: "354180653333",
  appId: "1:354180653333:web:89223300c58f26bf70c91c"
};

// Initialize Firebase
export function FirebaseApp(){
    return initializeApp(firebaseConfig);
}