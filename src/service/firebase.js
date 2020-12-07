const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAINS,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);
