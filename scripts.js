const products = [
    { id:1, name: "Red Sneakers", price: 1299, image: "images/products/red-sneakers.jpg", rating: 4, isNew: true },
    { id:2, name: "Blue T-Shirt", price: 499, image: "images/products/blue shirt.jpg", rating: 5, isNew: false },
    { id:3, name: "Denim Jeans", price: 899, image: "images/products/denim-jeans.jpg", rating: 3, isNew: true },
    { id:4, name: "Black Hoodie", price: 1599, image: "images/products/black hoodie.jpg", rating: 4, isNew: false },
    { id:5, name: "White Sneakers", price: 1399, image: "images/shoes.jpg", rating: 5, isNew: true },
    { id:6, name: "Blue Heals", price: 359, image: "images/products/heals.jpeg", rating: 4, isNew: false },
    { id:7, name: "College Bag", price: 1499, image: "images/products/college bag.jpeg", rating: 5, isNew: true }
];

  const container = document.getElementById('product-list');

  products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
      <a href="product.html?id=${product.id}" class="card-link">
        <img src="${product.image}" alt="${product.name}" class="card-img">
      </a>
        <div class="card-body">
          <h5>${product.name}</h5>
          <p>₹${product.price}</p>
          <div class="rating">${'⭐'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
          <a href="product.html?id=${product.id}" class="btn">View Product</a>
        </div>
    `;
    container.appendChild(card);
  });


function applyFilter() {
  const maxPrice = parseInt(document.getElementById("priceRange").value);
  const filtered = products.filter(p => p.price <= maxPrice);
  displayProducts(filtered);
}

// Update price label as slider moves
document.getElementById("priceRange").addEventListener("input", function () {
  document.getElementById("priceValue").innerText = `${this.value}`;
});

// Load products on page load
window.onload = () => {
  document.getElementById("priceValue").innerText = `${document.getElementById("priceRange").value}`;
  displayProducts(products);
};

// You can add interactive features later here, e.g., update price on quantity change.
document.addEventListener('DOMContentLoaded', function () {
  console.log("Product page loaded");
});

function handleSearch() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultContainer = document.getElementById("search-results");
  resultContainer.innerHTML = "";

  if (!query) return;

  const results = products.filter(p => p.name.toLowerCase().includes(query));

  if (results.length === 0) {
    resultContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  results.forEach(p => {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <a href="product.html?id=${p.id}" class="btn">View</a>
    `;
    resultContainer.appendChild(card);
  });
}

