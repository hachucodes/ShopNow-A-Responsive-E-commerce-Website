
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];


function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalElement = document.getElementById('total-price');
  cartContainer.innerHTML = '';
  let total = 0;

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item', 'col-md-12', 'd-flex', 'align-items-center', 'justify-content-between');

    itemDiv.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.image}" alt="${item.name}" width="80">
        <div class="item-details ml-3">
          <p class="item-title mb-1">${item.name}</p>
          <p class="item-price mb-2">₹${item.price}</p>
          <div class="quantity-controls">
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, -1)">−</button>
            <span class="mx-2">${item.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>
      </div>
      <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
    `;

    cartContainer.appendChild(itemDiv);
    total += item.price * item.quantity;
  });

  totalElement.textContent = total;

  // Save to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function changeQty(index, delta) {
  cartItems[index].quantity += delta;
  if (cartItems[index].quantity < 1) {
    cartItems[index].quantity = 1;
  }
  displayCart();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  displayCart();
}

window.onload = displayCart;
