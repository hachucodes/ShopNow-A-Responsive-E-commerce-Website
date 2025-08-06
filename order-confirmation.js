document.addEventListener("DOMContentLoaded", () => {
  const orderIdElement = document.getElementById("orderId");

  // Generate a mock order ID (you can replace with actual value)
  const orderId = Math.floor(Math.random() * 1e12);
  orderIdElement.textContent = `#${orderId}`;
});
