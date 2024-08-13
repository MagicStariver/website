//function

image = document.getElementById("image");
product_name = document.getElementById("product_name");
description = document.getElementById("desccription");
price = document.getElementById("price");



//manually set value first, then change to database

image.value = "images/guitar.jpg";
product_name.value = "Yamaha Acoustic Guitar";
description.value = "Discover rich tones and superb craftsmanship with the Yamaha Acoustic Guitar. Featuring a solid spruce top, mahogany body, and rosewood fretboard, it offers powerful sound and lasting durability—perfect for players of all levels.";
price.value = "$150";

// product_details.js

// Function to fetch and display product details
// product_details.js

// Function to fetch and display product details
function loadProductDetails(productId) {
    fetch(`get_product.php?id=${productId}`)
        .then(response => response.json())
        .then(product => {
            if (product.error) {
                alert(product.error);
                return;
            }

            // Display product details in HTML
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-price').textContent = `$${product.price}`;
            document.getElementById('product-image').src = `images/${product.image}`;
            document.getElementById('product-image').alt = product.name;

            // Store the product details to use when adding to cart
            document.getElementById('add-to-cart').dataset.product = JSON.stringify(product);
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
        });
}

// Function to handle adding the product to the cart
function addToCart() {
    // Retrieve product details from the button's data attribute
    const product = JSON.parse(this.dataset.product);

    // Get existing cart items from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add new product to cart
    cart.push(product);
    
    // Save updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert("Product added to cart!");
    
}

// Function to handle purchasing the product
function buyNow() {
    alert("Proceed to checkout!");
    // You can redirect to a checkout page or process payment
}

// Attach event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
    const productId = 1; // Replace with dynamic product ID if necessary
    loadProductDetails(productId);

    const addToCartButton = document.getElementById('add-to-cart');
    const buyNowButton = document.getElementById('buy-now');
    
    addToCartButton.addEventListener('click', function(event) {
        event.preventDefault();
        addToCart.call(this);
    });
    
    buyNowButton.addEventListener('click', (event) => {
        event.preventDefault();
        buyNow();
    });
});
