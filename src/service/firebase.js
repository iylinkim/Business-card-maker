import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAINS,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

//Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//initialize하게 되면 firebaseApp이 return이 됨
export default firebaseApp;
