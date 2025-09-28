function renderCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");

  if (!cartItems.length) {
    container.innerHTML = "<p>السلة فارغة</p>";
    return;
  }

  container.innerHTML = "";

  let total = 0;

  cartItems.forEach((product, index) => {
    const price = Number(product.price); // نحول السعر إلى رقم
    total += price;

    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="100">
      <h3>${product.name}</h3>
<p>السعر: ${price} ريال</p>
      <button onclick="removeFromCart(${index})">حذف</button>
      <hr>
    `;
    container.appendChild(item);
  });

  const totalElement = document.createElement("h3");
  totalElement.textContent = `المجموع الكلي: ${total} ريال`;

  container.appendChild(totalElement);
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCountElem = document.getElementById("cartCount");
  if (cartCountElem) {
    cartCountElem.textContent = cart.length;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  updateCartCount();
});

function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
  updateCartCount();
}
document.addEventListener("DOMContentLoaded", () => {
  // نتحقق إذا المستخدم داخل (مسجل دخول) ولا لأ
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    // لو مش عامل تسجيل دخول → يروح على login.html
    window.location.href = "login.html";
    return;
  }

  renderCart();
  updateCartCount();
});
function checkLogin() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    // لو مش عامل Login → نرجعه
    window.location.href = "login.html";
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  if (!checkLogin()) return; // يتحقق من تسجيل الدخول
  renderCart();
  updateCartCount();
});

// قبل أي عملية حذف أو إفراغ نتأكد برضه
function removeFromCart(index) {
  if (!checkLogin()) return;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function clearCart() {
  if (!checkLogin()) return;
  localStorage.removeItem("cart");
  renderCart();
  updateCartCount();
}
