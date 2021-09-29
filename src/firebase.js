import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4In7kmFgw1XOnqr-o3dY01zHcDCItRYM",
  authDomain: "clone-ac4c1.firebaseapp.com",
  databaseURL: "https://clone-ac4c1.firebaseapp.com",
  projectId: "clone-ac4c1",
  storageBucket: "clone-ac4c1.appspot.com",
  messagingSenderId: "972102647410",
  appId: "1:972102647410:web:489c789e790cd023554ceb",
  // measurementId: "G-PHCR1SH772"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };