document.addEventListener("DOMContentLoaded", function() {
    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        // Call your function to load product details based on the ID
        loadProductDetails(productId);
    } else {
        console.error("Product ID not found in URL");
    }
});

// Function to fetch and display product details
function loadProductDetails(productId) {
    fetch(`product%20_details.html?id=${productId}`) 
        .then(response => response.json())
        .then(product => {
            if (product.error) {
                alert(product.error);
                return;
            }

            // Display product details in HTML 这里随便你改，id对了的
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

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
if (productId) {
    loadProductDetails(productId);
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
