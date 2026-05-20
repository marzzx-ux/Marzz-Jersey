let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Produk ditambahkan ke keranjang");
}

function updateCartCount() {
  const count = document.getElementById("cartCount");
  if (count) count.innerText = cart.length;
}

function loadCheckout() {
  const list = document.getElementById("checkoutList");
  const totalText = document.getElementById("checkoutTotal");

  if (!list) return;

  list.innerHTML = "";
  let total = 3;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name}
      <span>Rp ${item.price.toLocaleString()}</span>
    `;
    list.appendChild(li);
  });

  totalText.innerText = "Rp " + total.toLocaleString();
}

function checkout() {
  alert("Pesanan berhasil! Terima kasih 🙏");
  localStorage.removeItem("cart");
  window.location.href = "web.html";
}

updateCartCount();
loadCheckout();

let currentProduct = null;

function openModal(name, price, discount) {
  const finalPrice = price - (price * discount / 100);

  currentProduct = { name, price: finalPrice };

  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPrice").innerText = "Rp " + price.toLocaleString();
  document.getElementById("modalDiscount").innerText = discount + "%";
  document.getElementById("modalFinalPrice").innerText =
    "Rp " + finalPrice.toLocaleString();

  document.getElementById("productModal").style.display = "block";

  document.getElementById("modalAddBtn").onclick = function () {
    const size = document.getElementById("modalSize").value;
    addToCart(name + " (Size " + size + ")", finalPrice);
    closeModal();
  };
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}
// ================= PROSES PEMBAYARAN =================
function processPayment() {
  const method = document.getElementById("payment-method").value;

  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  if (!method) {
    alert("Silakan pilih metode pembayaran!");
    return;
  }

  alert("Pembayaran berhasil dengan metode: " + method);

  // kosongkan keranjang setelah bayar
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  loadCheckout();
}