// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// import { db } from "./firebase";
// import { ref, set, push, onValue } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHW8gPuNSVstSV0ytE8oB5-_3PJKvxgMA",
    authDomain: "muzica-93e9c.firebaseapp.com",
    projectId: "muzica-93e9c",
    storageBucket: "muzica-93e9c.appspot.com",
    messagingSenderId: "559137569600",
    appId: "1:559137569600:web:081ec42350a9f8099658a5",
    measurementId: "G-G5MCSMD8H0",
    databaseURL: "https://muzica-93e9c-default-rtdb.firebaseio.com/"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


function writeUserData(username, email, phone, address, password) {
    const data = push(ref(db, 'userdata'));
    set(data, {
      username: username,
      email: email,
      phone: phone,
      address: address,
      password: password,
    });
  }   

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 防止表单提交

        // 获取表单数据
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        alert("success");

        if (password !== confirmPassword) {
            registerMessage.textContent = 'Passwords do not match!';
            registerMessage.style.color = 'red';
            alert("false");
            return;
        }else{
            writeUserData(username, email, phone, address, password);
            registerMessage.textContent = 'add success';
            alert("success");
        }

        // 存储用户数据到 localStorage
        // const users = JSON.parse(localStorage.getItem('users')) || [];
        // const existingUser = users.find(user => user.username === username);

        // if (existingUser) {
        //     registerMessage.textContent = 'Username already exists!';
        //     registerMessage.style.color = 'red';
        // } else {
        //     users.push({ username, email, phone, address, password });
        //     localStorage.setItem('users', JSON.stringify(users));
        //     localStorage.setItem('username', username); // 存储当前用户名
        //     registerMessage.textContent = 'Registration successful!';
        //     registerMessage.style.color = 'green';
        //     setTimeout(() => {
        //         window.location.href = 'index.html'; // 注册成功后跳转到首页
        //     }, 2000);
        // }
    });
});
