import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyADtB0GcUG6Nb8U66ZrUqj4PfNuV09AXTA",
    authDomain: "expensify-3b906.firebaseapp.com",
    databaseURL: "https://expensify-3b906.firebaseio.com",
    projectId: "expensify-3b906",
    storageBucket: "expensify-3b906.appspot.com",
    messagingSenderId: "623395118728"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };