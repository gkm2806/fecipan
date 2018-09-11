import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDMZRKX0p7RUSqQe6jeLvKy2BwI0REs16Y",
  authDomain: "fecipan.firebaseapp.com",
  databaseURL: "https://fecipan.firebaseio.com",
  projectId: "fecipan",
  storageBucket: "fecipan.appspot.com",
  messagingSenderId: "135044982024"
};
firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

function signOut(){
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    return console.log(error)
  });
}


console.log("Servidor Firebase ON");
