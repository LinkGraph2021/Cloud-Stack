import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1ABSWTRpTJNFnWC8G7p4E85_8I6IQgVc",
  authDomain: "cloud-sites-a5621.firebaseapp.com",
  projectId: "cloud-sites-a5621",
  storageBucket: "cloud-sites-a5621.appspot.com",
  messagingSenderId: "344762534443",
  appId: "1:344762534443:web:3a015464a903ee4514b86e"
};

firebase.initializeApp(firebaseConfig);


const auth= firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage, firebase };