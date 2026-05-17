// FIREBASE IMPORT
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// FIREBASE CONFIG
const firebaseConfig = {
apiKey: "AIzaSyAdWe6qDN9X1qx3-l5gYl71VphEAkDIuvI",
authDomain: "leafsaathi-8da22.firebaseapp.com",
projectId: "leafsaathi-8da22",
storageBucket: "leafsaathi-8da22.firebasestorage.app",
messagingSenderId: "482093075401",
appId: "1:482093075401:web:d43de8491f13bd89323618",
measurementId: "G-1W1Y1G26J9"
};


// INIT FIREBASE
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// GOOGLE LOGIN
window.googleLogin = function(){

signInWithPopup(auth, provider)

.then((result)=>{

const user = result.user;

// SAVE USER
localStorage.setItem(
"loggedInUser",
user.email
);

localStorage.setItem(
"userName",
user.displayName
);

localStorage.setItem(
"userPhoto",
user.photoURL
);

// SUCCESS
alert("Login Successful ✅");

// REDIRECT
window.location.href = "index.html";

})

.catch((error)=>{

alert(error.message);

});

};


// LOGOUT
window.logout = function(){

signOut(auth)

.then(()=>{

localStorage.removeItem("loggedInUser");
localStorage.removeItem("userName");
localStorage.removeItem("userPhoto");

alert("Logged Out ✅");

window.location.href = "login.html";

});

};