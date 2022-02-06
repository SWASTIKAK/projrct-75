import firebase from "firebase";
//require("@firebase/firestore");

var firebaseConfig = {
  aapiKey: "AIzaSyApxNOiKRTB8rH4yrqOkIfCZY-9Z5yPAu4",
  authDomain: "project-72-8af7e.firebaseapp.com",
  projectId: "project-72-8af7e",
  storageBucket: "project-72-8af7e.appspot.com",
  messagingSenderId: "810830273310",
  appId: "1:810830273310:web:668fcb9e81685824dec70f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
