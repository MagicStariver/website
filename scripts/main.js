document.addEventListener('DOMContentLoaded', function() {
    // 选择元素
    const buyButtons = document.querySelectorAll('.buy-button');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product');
    const categoryButtons = document.querySelectorAll('.category-button');
    const productsLink = document.querySelector('header nav ul li:nth-child(2) a');
    const mybutton = document.getElementById("back-to-top");
    const userMenu = document.querySelector('.user-menu');
    const loginMenu = document.querySelector('.login');
    const userNameElement = document.getElementById('userName');
    const logoutButton = document.getElementById('logout');
    const settingsLink = document.getElementById('settingsLink');
    
    updateLoginStatus();

    // 用户菜单点击事件
    userNameElement.addEventListener('click', function(event) {
        event.preventDefault();
        userMenu.classList.toggle('show');
    });
    
    // 处理注销事件
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('username'); // 清除用户名
                updateLoginStatus(); // 更新登录状态
                window.location.href = 'login.html'; // 重定向到登录页面
            }
        });
    }
    
    // 设置链接点击事件
    if (settingsLink) {
        settingsLink.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('username');
                updateLoginStatus();
            }
        });
    }

    // 购买按钮事件处理
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your purchase!');
        });
    });

    // 搜索功能
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            product.style.display = productName.includes(query) ? 'block' : 'none';
        });
    });

    // 类别筛选功能
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.getAttribute('data-category');
            products.forEach(product => {
                product.style.display = (category === 'all' || product.getAttribute('data-category') === category) ? 'block' : 'none';
            });
        });
    });

    // 平滑滚动到 Products 部分
    if (productsLink) {
        productsLink.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认跳转行为
            var productsSection = document.getElementById('product-list');
            productsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Back-to-top 按钮功能
    if (mybutton) {
        window.onscroll = function() { 
            mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? 'block' : 'none';
        };
        
        mybutton.addEventListener('click', function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }
    
    // 更新登录状态
    function updateLoginStatus() {
        let username = localStorage.getItem('username');
        console.log('Username from localStorage:', username); // 添加此行进行调试
        if (username) {
            userNameElement.textContent = username;
            userMenu.classList.remove('hidden');
            loginMenu.classList.add('hidden');
        } else {
            userNameElement.textContent = 'Username';
            userMenu.classList.add('hidden');
            loginMenu.classList.remove('hidden');
        }
    }

    // 以下代码添加了页面加载时动态更新用户信息的功能
    const username = "JohnDoe"; // Replace with actual username from login
    const email = "johndoe@example.com"; // Replace with actual email
    const fullname = "John Doe"; // Replace with actual full name
    const dob = "01/01/1990"; // Replace with actual date of birth
    const address = "123 Main St, City, Country"; // Replace with actual address

    document.getElementById('username').textContent = username;
    document.getElementById('email').textContent = email;
    document.getElementById('fullname').textContent = `Full Name: ${fullname}`;
    document.getElementById('dob').textContent = `Birthday: ${dob}`;
    document.getElementById('address').textContent = `Address: ${address}`;
});
