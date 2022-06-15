import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZbSd-Q45E4ptlbGRNoTSkHRBIBklwzaM",
  authDomain: "trackify-c18b5.firebaseapp.com",
  projectId: "trackify-c18b5",
  storageBucket: "trackify-c18b5.appspot.com",
  messagingSenderId: "928045354543",
  appId: "1:928045354543:web:5b3f2d87d331ff210040da",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
