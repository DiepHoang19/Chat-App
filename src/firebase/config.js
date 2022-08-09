import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDz7QS8ZNiBQvmUy__Zh4PioMrW5GMdli8",
  authDomain: "chat-room-app-demo-dbfa0.firebaseapp.com",
  projectId: "chat-room-app-demo-dbfa0",
  storageBucket: "chat-room-app-demo-dbfa0.appspot.com",
  messagingSenderId: "594063106798",
  appId: "1:594063106798:web:f6f0a9888b8349e8cec9ff",
  measurementId: "G-P1P7XHDFM4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
