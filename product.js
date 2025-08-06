const products = [
  { id: 1, name: "Red Sneakers", price: 1299, image: "images/products/red-sneakers.jpg", rating: 4, description: "Trendy red sneakers perfect for any occasion." },
  { id: 2, name: "Blue T-Shirt", price: 499, image: "images/products/blue shirt.jpg", rating: 5, description: "Comfortable and stylish blue t-shirt." },
  { id: 3, name: "Denim Jeans", price: 899, image: "images/products/denim-jeans.jpg", rating: 3, description: "Classic denim jeans with a modern fit." },
  { id: 4, name: "Black Hoodie", price: 1599, image: "images/products/black hoodie.jpg", rating: 4, description: "Warm and cozy hoodie for casual wear." },
  { id: 5, name: "White Sneakers", price: 1399, image: "images/shoes.jpg", rating: 5, description: "Sleek white sneakers for everyday use." },
  { id: 6, name: "Blue Heals", price: 359, image: "images/products/heals.jpeg", rating: 4, description: "Elegant blue heels for formal events." },
  { id: 7, name: "College Bag", price: 1499, image: "images/products/college bag.jpeg", rating: 5, description: "Spacious and durable college bag." }
];

function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

function addToCart(product, quantity) {
  const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

function displayProduct(product) {
  const container = document.getElementById('product-detail');
  if (!product) {
    container.innerHTML = "<p>Product not found.</p>";
    return;
  }
  container.innerHTML = `
    <div class="product-box">
      <div class="product-info">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <h2>${product.name}</h2>
        <p class="price">₹${product.price}</p>
        <div class="rating">${'⭐'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
        <p>${product.description}</p>
        <label>Quantity: <input id="qtyInput" type="number" value="1" min="1"></label>
        <button class="btn" onclick="handleAddToCart(${product.id})">Add to Cart</button>
      </div>
      <div class="related-products">
        <h3>Related Products</h3>
        <div class="related-list">
          ${products.filter(p => p.id !== product.id).map(p => `
            <div class="related-card">
              <img src="${p.image}" alt="${p.name}">
              <p><a href="product.html?id=${p.id}">${p.name}</a></p>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function handleAddToCart(id) {
  const qty = parseInt(document.getElementById("qtyInput").value);
  const product = getProductById(id);
  if (qty > 0) {
    addToCart(product, qty);
  }
}

window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = getProductById(productId);
  displayProduct(product);
};
