subtractButton = document.getElementById("subtract");
addButton = document.getElementById("add");
amount = document.getElementById("amount");
check_outButtons = document.getElementById("checkout");
total_price = document.getElementById("total-price");

const originalPrice = parseFloat(total_price.innerHTML.replace("RM", ""));

addButton.addEventListener('click', function(event) {
    let count = parseInt(amount.innerHTML);
    count += 1;
    amount.innerHTML = count;
    const newTotal = originalPrice * count;
    total_price.innerHTML = "RM" + newTotal.toFixed(2);
});

subtractButton.addEventListener('click', function(event) {
    let count = parseInt(amount.innerHTML);
    if (count > 1) {
        count -= 1;
        amount.innerHTML = count;
        const newTotal = originalPrice * count;
        total_price.innerHTML = "RM" + newTotal.toFixed(2);
    }
});


check_outButtons.addEventListener('click', function(event) {
    alert("check out");
    //const productId = this.getAttribute('data-product-id');
    //location.href="check_out.html?id=" + cartId; 这里的cart id need database
    location.href="check_out.html";
});



//database放这里， 我大概从index html抄来的

function displayProducts(products) {
    const listContainer = document.getElementById("cart-item-list");
    listContainer.innerHTML = ''; // Clear previous content

    //下面这里可以不用动了
    products.forEach(product => {
        const Div = `
            <div class="cart-item">
                <img src="${product.image_source}" alt="${product.product_name}"" class="product-img" id="image">
                <div class="product-details">
                    <p id="product_name">${product.product_name}</p>
                    <p id="price">RM${product.price}</p>
                </div>
                <div class="quantity-controls">
                    <button id="subtract" >-</button>
                    <span id="amount">1</span>
                    <button id="add">+</button>
                </div>
            </div>
        `;
        listContainer.innerHTML += Div;
    });
}


