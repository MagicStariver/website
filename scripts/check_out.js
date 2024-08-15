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

const name = getCookieValue('username')
const persona_Info = ref(db,'/personal_data/'+name+'/personal_information')

onValue(persona_Info,(snapshot)=>{
    const data = snapshot.val();
    if(data){
        const productkey = Object.keys(data).map(key =>({
            id:key,
            ...data[key]
        }));
        console.log('perdona infor display'+productkey);
        alert(productkey)
        displayUserInfo(productkey)
    }
})

// onValue(cartview, (snapshot)=>{
//     const data = snapshot.val();
//     if(data){
//         const productkey = Object.keys(data).map(key =>({
//             id:key,
//             ...data[key]
//           }));
//         console.log(productkey);
//         const productId = productkey.map(item => item.productid); 
//         console.log(productId)
//         const productDetails = ref (db,'/product/');
//         onValue(productDetails, (snapshot)=>{
//             const productData = snapshot.val();
//             if (productData){
//                 const allProducts = productData;
//                 const productDetailsForCart = productId.map(productId => ({  
//                     id: productId,  
//                     ...allProducts[productId]  
//                 }));
//                 const productIds = productDetailsForCart.map(item => item.id); 
//                 displayProducts(productDetailsForCart)
//                 console.log(productDetailsForCart);
//                 console.log(productIds)
//                 //console.log(productData)
//             }
//         })
//     }
// })


function getCookieValue(name) {  
    const value = `; ${document.cookie}`;  
    const parts = value.split(`; ${name}=`);  
    if (parts.length === 2) return parts.pop().split(';').shift();  
    return null; // Returns null if the cookie isn't found  
}

username = document.getElementById("name");
address = document.getElementById("address");
phone = document.getElementById("phone");
// product_name = document.getElementById("product_name");
// price = document.getElementById("price");

// shipping = document.getElementById("shipping-method")
// payment = document.getElementById("payment");

// subtotal = document.getElementById("subtotal");
// shipping_fee = document.getElementById("shipping_fee");
// total = document.getElementById("total");

check_out = document.getElementById("check_out");

function displayUserInfo (info){
    const listContainer = document.getElementById("user-details");
    listContainer.innerHTML = ''; // Clear previous content

    //下面这里可以不用动了
    products.forEach(product => {
        const Div = `
            <div class="user-detail">
                <p id="name"><strong>Name :</strong> yuan</p>
                <p id="address"><strong>Address :</strong> 34, Jalan .......</p>
                <p id="phone"><strong>Phone :</strong> 1234567890</p>
            </div>
        `;
        listContainer.innerHTML += Div;
        console.log(product.id);
    });
}