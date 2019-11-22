import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcsDj_AJhWTIp4X50auH9AbN4K6OKAOo0",
  authDomain: "productioreact.firebaseapp.com",
  databaseURL: "https://productioreact.firebaseio.com",
  projectId: "productioreact",
  storageBucket: "productioreact.appspot.com",
  messagingSenderId: "655995948353",
  appId: "1:655995948353:web:858f618ecd951756d765c0",
  measurementId: "G-BTTRW7SJZN"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;
