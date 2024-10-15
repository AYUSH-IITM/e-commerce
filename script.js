let cart = [];

// Load cart from localStorage on page load
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount();
}

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} has been added to your cart!`);
    updateCartCount();
    saveCartToLocalStorage();
}

function updateCartCount() {
    const cartCount = cart.length;
    document.getElementById('cartCount').innerText = cartCount;
    localStorage.setItem('cartCount', cartCount); // Store the count in localStorage
}

function showCart() {
    const cartSection = document.getElementById('cart');
    const cartItems = document.getElementById('cartItems');
    
    // Clear previous cart items
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(itemDiv);
        });
    }

    cartSection.style.display = 'block';
}

function searchProducts() {
    const query = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function checkout() {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
}
