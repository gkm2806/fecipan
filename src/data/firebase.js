import * as firebase from "firebase";
const fire = firebase.initializeApp({
  apiKey: "AIzaSyDMZRKX0p7RUSqQe6jeLvKy2BwI0REs16Y",
  authDomain: "fecipan.firebaseapp.com",
  databaseURL: "https://fecipan.firebaseio.com",
  projectId: "fecipan",
  storageBucket: "fecipan.appspot.com",
  messagingSenderId: "135044982024"
});
const firebaseui = require('firebaseui');

const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    // List of OAuth providers supported.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
});


ui.start('#firebaseui-auth-container', {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
});

function writeProjeto(nome, area, nivel, local) {
  firebase.database().ref('projetos/' + nome).set({
    nome: nome,
    local: local,
    area: area,
    nivel: nivel
  });
}

export default fire;

/*
jorgin.on('value', function(snapshot) {
  console.log(snapshot.val());
});*/
