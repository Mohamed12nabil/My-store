// منتجات تجريبية
const products = [
  {
    id: 1,
    name: "ساعة ذكية",
    price: 150,
    image: "images/watch.jpg",
  },
  {
    id: 2,
    name: "سماعة بلوتوث",
    price: 80,
    image: "images/headphones.jpg",
  },
  {
    id: 3,
    name: "لاب توب",
    price: 2500,
    image: "images/laptop.jpg",
  },
];

// عرض المنتجات
function renderProducts() {
  const container = document.getElementById("productsContainer");
  container.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="200">
      <h3>${product.name}</h3>
      <p>السعر: ${product.price} ريال</p>
      <button onclick='addToCart(${JSON.stringify(
        product
      )})'>أضف إلى السلة</button>
    `;
    container.appendChild(div);
  });
}

// إضافة للسلة
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`تمت إضافة ${product.name} إلى السلة`);
}

// تحديث العداد
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCountElem = document.getElementById("cartCount");
  if (cartCountElem) {
    cartCountElem.textContent = cart.length;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartCount();
});
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    // لو مفيش مستخدم مسجل، يرجّع على صفحة الدخول
    window.location.href = "login.html";
    return;
  }

  // المستخدم موجود، نعرض المنتجات
  renderProducts();
  updateCartCount();
});
