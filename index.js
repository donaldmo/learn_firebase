/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
/* === Firebase Setup === */

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKSoheAIDzxi9YNo-k5w6wIjA1pSGAnbE",
  authDomain: "advance-sonar-387313.firebaseapp.com",
  projectId: "advance-sonar-387313",
  storageBucket: "advance-sonar-387313.appspot.com",
  messagingSenderId: "313033996661",
  appId: "1:313033996661:web:cd2af8b7a1394ec63b3b3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view");
const viewLoggedIn = document.getElementById("logged-in-view");

const signInWithGoogleButtonEl = document.getElementById(
  "sign-in-with-google-btn"
);

const emailInputEl = document.getElementById("email-input");
const passwordInputEl = document.getElementById("password-input");

const signInButtonEl = document.getElementById("sign-in-btn");
const createAccountButtonEl = document.getElementById("create-account-btn");

const signOutButtonEl = document.getElementById("sign-out-btn");

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle);

signInButtonEl.addEventListener("click", authSignInWithEmail);
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail);

signOutButtonEl.addEventListener("click", authSignOut);

/* === Main Code === */

showLoggedOutView();
// showLoggedInView();

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
  console.log("Sign in with Google");
}

function authSignInWithEmail() {
  const EMAIL = emailInputEl.value;
  const PASSWORD = passwordInputEl.value;
  console.log(EMAIL, PASSWORD)

  signInWithEmailAndPassword(auth, EMAIL, PASSWORD)
    .then((userCredential) => {
      clearAuthFields()
      showLoggedInView();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

function authCreateAccountWithEmail() {
  const EMAIL = emailInputEl.value;
  const PASSWORD = passwordInputEl.value;

  createUserWithEmailAndPassword(auth, EMAIL, PASSWORD)
    .then((userCredential) => {
      clearAuthFields()
      showLoggedInView();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
}

function authSignOut() {
  signOut(auth)
    .then(() => {
      showLoggedOutView();
    })
    .catch((error) => {
      console.error(error.message);
    }); 
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
  hideView(viewLoggedIn)
  showView(viewLoggedOut)
}

function showLoggedInView() {
  hideView(viewLoggedOut)
  showView(viewLoggedIn)
}

function showView(view) {
  view.style.display = "flex"
}

function hideView(view) {
  view.style.display = "none"
}

function clearInputField(field) {
field.value = ""
}

function clearAuthFields() {
clearInputField(emailInputEl)
clearInputField(passwordInputEl)
}