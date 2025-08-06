const products = [
    { name: "Sneakers", image: "images/category/sneakers.jpeg"},
    { name: "Bags", image: "images/category/bags.png"},
    { name: "T-Shirts", image: "images/category/shirts.png"},
    { name: "Stationary", image: "images/category/stationary.jpg"},
    { name: "Makeup", image: "images/category/makeup.jpeg"},
    { name: "Electronics", image: "images/category/electronics.jpeg"}
    
];

  const container = document.getElementById('product-list');

  products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
      <a href="" class="card-link">
        <img src="${product.image}" alt="${product.name}" class="card-img">
      </a>
        <div class="card-body">
          <h5>${product.name}</h5>
        </div>
    `;
    container.appendChild(card);
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
