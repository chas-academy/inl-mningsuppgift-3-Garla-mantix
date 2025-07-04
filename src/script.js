const productInput = document.getElementById('productInput');
const priceInput = document.getElementById('priceInput');
const addButton = document.getElementById('addButton');
const cartList = document.getElementById('cartList');


let cart = [];

// Add a product to the cart
function addToCart() {
    const productName = productInput.value;
    const productPrice = Number(priceInput.value);
    const newProduct = { 
        name: productName, 
        price: productPrice,
        quantity: 1
    };

    let itemExists = false;

    for (let item of cart) {
        if (item.name === productName) {
            item.quantity++;
            itemExists = true;
        }
    };

    if (!itemExists) {
        cart.push(newProduct);
    };

    productInput.value = "";
    priceInput.value = "";
    renderCart();
};

// Render the cart items on page
function renderCart() {
    cartList.innerHTML = "";

    for (let item of cart) {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}kr (x${item.quantity})`;
        cartList.appendChild(li);
    }
};

// Event listener for the button
addButton.addEventListener("click", () => {
    addToCart();
});