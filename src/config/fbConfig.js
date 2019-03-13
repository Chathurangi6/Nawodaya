import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAF3cV-CJIqdEcOhlDCRE9TZS9wP_0ZGk8",
    authDomain: "nawodaya-8654b.firebaseapp.com",
    databaseURL: "https://nawodaya-8654b.firebaseio.com",
    projectId: "nawodaya-8654b",
    storageBucket: "nawodaya-8654b.appspot.com",
    messagingSenderId: "63164143291"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase