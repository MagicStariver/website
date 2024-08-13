document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();

            // 通过用户名和密码查找用户
            const dbRef = ref(database);
            get(child(dbRef, `users/${username}`)).then((snapshot) => {
                if (snapshot.exists() && snapshot.val().password === password) {
                    loginMessage.textContent = 'Login successful!';
                    loginMessage.style.color = 'green';

                    // 将用户名存储在本地存储中
                    localStorage.setItem('username', username);

                    // 跳转到主页
                    window.location.href = 'index.html';
                } else {
                    loginMessage.textContent = 'Invalid username or password';
                    loginMessage.style.color = 'red';
                }
            }).catch((error) => {
                console.error(error);
                loginMessage.textContent = 'An error occurred. Please try again.';
                loginMessage.style.color = 'red';
            });
        });
    }
});
