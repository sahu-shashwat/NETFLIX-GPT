// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsgCokEpo_3BtF2RVOUcuZ38COuoBRKbI",
  authDomain: "netflix-gpt-c630b.firebaseapp.com",
  projectId: "netflix-gpt-c630b",
  storageBucket: "netflix-gpt-c630b.appspot.com",
  messagingSenderId: "542459038725",
  appId: "1:542459038725:web:c245e6e72842a58963e06c",
  measurementId: "G-4PB6JG9622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()