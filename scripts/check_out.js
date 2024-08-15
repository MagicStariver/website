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
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const name = getCookieValue('username');
if (!name) {  
    console.error("Username is undefined. Ensure 'getCookieValue' is returning the correct value.");  
} else {  
    const persona_Info = ref(db, '/personal_data/' + name + '/personal_information');  
    onValue(persona_Info, (personalSnapshot) => {  
        const personalData = personalSnapshot.val();  
        console.log(personalData)
        const cartview = ref(db, '/personal_data/' + name + '/cart');  
        onValue(cartview, (cartSnapshot) => {  
            const cartData = cartSnapshot.val();  
            if (cartData) {  
                const productKeys = Object.keys(cartData).map(key => ({  
                    id: key,  
                    ...cartData[key]  
                }));  
                const productIds = productKeys.map(item => item.productid);   
                const productDetails = ref(db, '/product/');  
                onValue(productDetails, (productSnapshot) => {  
                    const productData = productSnapshot.val(); 
                    if (productData) {  
                        const productDetailsForCart = productIds.map(productId => ({  
                            id: productId,  
                            ...productData[productId]  
                        }));
                        console.log(productDetailsForCart) 
                        generateCheckoutPage(personalData, productDetailsForCart);  
                    }  
                });  
            }  
        });  
    });  
}

function getCookieValue(name) {  
    const value = `; ${document.cookie}`;  
    const parts = value.split(`; ${name}=`);  
    if (parts.length === 2) return parts.pop().split(';').shift();  
    return null; // Returns null if the cookie isn't found  
}

function generateCheckoutPage(info,product) {
    const userDetailsContainer = document.querySelector(".user-detail");
    const productDetailsContainer = document.querySelector(".product-details");
    const shippingMethodSelect = document.getElementById("shipping-method");
    const paymentMethodSelect = document.getElementById("payment-method");
    const subtotalElement = document.getElementById("subtotal");
    const shippingFeeElement = document.getElementById("shipping_fee");
    const totalElement = document.getElementById("total");

    // Populate user details
    userDetailsContainer.innerHTML = `
        <p id="name"><strong>Name :</strong> ${name}</p>
        <p id="address"><strong>Address :</strong> ${info.address}</p>
        <p id="phone"><strong>Phone :</strong> ${info.phone}</p>
    `;

    // Populate product details
    productDetailsContainer.innerHTML = '';
    let subtotal = 0;
    product.forEach(product => {
        subtotal += product.price * product.quantity;
        const productHTML = `
            <div class="product-item">
                <div class="product-image">
                    <img src="${product.image_source}" alt="${product.product_name}">
                </div>
                <div class="product-description">
                    <p id="product_name">${product.product_name}</p>
                    <p id="price"><strong>RM ${product.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
            productDetailsContainer.innerHTML += productHTML;
        });    
        // Populate shipping method
        shippingMethodSelect.value = data.shippingMethod;
    
        // Populate payment method
        paymentMethodSelect.value = data.paymentMethod;
    
        // Calculate and display totals
        const total = subtotal + data.shippingFee;
        subtotalElement.innerHTML = `RM ${subtotal.toFixed(2)}`;
        shippingFeeElement.innerHTML = `RM ${data.shippingFee.toFixed(2)}`;
        totalElement.innerHTML = `RM ${total.toFixed(2)}`;
}
