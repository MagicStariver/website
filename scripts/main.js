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

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
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

    // 处理购物车显示
    function displayCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Haven\'t chosen product</p>';
            totalPriceElement.innerHTML = 'Total Price: $0.00';
        } else {
            let total = 0;
            cartItemsContainer.innerHTML = cart.map(item => {
                const price = parseFloat(item.price.replace('$', ''));
                total += price;
                return `
                    <div class="cart-item">
                        <div class="item-details">
                            <h3>${item.name}</h3>
                            <p>Price: ${item.price}</p>
                        </div>
                    </div>
                `;
            }).join('');
    
            totalPriceElement.innerHTML = `Total Price: $${total.toFixed(2)}`;
        }
    }

    // 更新登录状态
    function updateLoginStatus() {
        let username = localStorage.getItem('username');
        if (username) {
            userNameElement.textContent = username;
            userMenu.classList.remove('hidden');
            loginMenu.classList.add('hidden');
        } else {
            userNameElement.textContent = 'Login';
            userMenu.classList.add('hidden');
            loginMenu.classList.remove('hidden');
        }
    }
    
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
            const productElement = button.closest('.product');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = productElement.querySelector('p').textContent;

            const product = {
                name: productName,
                price: productPrice,
            };

            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Added to cart');
            displayCart(); // 更新购物车显示
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
});