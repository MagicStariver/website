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
