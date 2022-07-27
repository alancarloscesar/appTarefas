import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDkYxzZGIlnN-7W2L1Oi8clY1sQiRPFn8Q",
    authDomain: "tarefas-17b53.firebaseapp.com",
    projectId: "tarefas-17b53",
    storageBucket: "tarefas-17b53.appspot.com",
    messagingSenderId: "34661641483",
    appId: "1:34661641483:web:70260a5d94cfccaed5c60e"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;