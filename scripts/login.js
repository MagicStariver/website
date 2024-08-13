// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHW8gPuNSVstSV0ytE8oB5-_3PJKvxgMA",
  authDomain: "muzica-93e9c.firebaseapp.com",
  projectId: "muzica-93e9c",
  storageBucket: "muzica-93e9c.appspot.com",
  messagingSenderId: "559137569600",
  appId: "1:559137569600:web:081ec42350a9f8099658a5",
  measurementId: "G-G5MCSMD8H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// scripts/login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                loginMessage.textContent = 'Login successful!';
                loginMessage.style.color = 'green';

                // Store username in local storage
                localStorage.setItem('username', username);

                // Navigate back to homepage (index.html)
                window.location.href = 'index.html';
            } else {
                loginMessage.textContent = 'Invalid username or password';
                loginMessage.style.color = 'red';
            }
        });
    }
});
