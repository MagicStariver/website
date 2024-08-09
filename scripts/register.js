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

        if (password !== confirmPassword) {
            registerMessage.textContent = 'Passwords do not match!';
            registerMessage.style.color = 'red';
            return;
        }

        // 存储用户数据到 localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            registerMessage.textContent = 'Username already exists!';
            registerMessage.style.color = 'red';
        } else {
            users.push({ username, email, phone, address, password });
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('username', username); // 存储当前用户名
            registerMessage.textContent = 'Registration successful!';
            registerMessage.style.color = 'green';
            setTimeout(() => {
                window.location.href = 'index.html'; // 注册成功后跳转到首页
            }, 2000);
        }
    });
});
