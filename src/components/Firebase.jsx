import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const settings = {timestampsInSnapshots: true};

var config = {
    apiKey: "AIzaSyCqeVa44-qLO9HItGqqbxqE2EuhA0FlLr4",
    authDomain: "roskimag-a9ec0.firebaseapp.com",
    databaseURL: "https://roskimag-a9ec0.firebaseio.com",
    projectId: "roskimag-a9ec0",
    storageBucket: "roskimag-a9ec0.appspot.com",
    messagingSenderId: "153926047220"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
