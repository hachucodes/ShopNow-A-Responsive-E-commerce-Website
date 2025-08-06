window.onload = () => {
  const orderList = document.getElementById('order-list');
  const totalElement = document.getElementById('checkout-total');
  const storedCart = localStorage.getItem('cartItems');
  let total = 0;

  if (!storedCart) {
    orderList.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.textContent = "0";
    return;
  }

  const cartItems = JSON.parse(storedCart);
  orderList.innerHTML = '';

  cartItems.forEach(item => {
    const itemRow = document.createElement('div');
    itemRow.className = 'checkout-item mb-3';

    itemRow.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <strong>${item.name}</strong> x ${item.quantity}
        </div>
        <div>₹${item.price * item.quantity}</div>
      </div>
    `;

    orderList.appendChild(itemRow);
    total += item.price * item.quantity;
  });

  totalElement.textContent = total;
};

document.getElementById("placeOrderBtn").addEventListener("click", function () {
  // You can perform validations or store cart data before redirect
  window.location.href = "order-confirmation.html";
});
