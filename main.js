const products = [
  { id: 1, name: "منتج 1", price: 100 },
  { id: 2, name: "منتج 2", price: 150 },
  { id: 3, name: "منتج 3", price: 200 },
];

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("تم إضافة المنتج إلى سلة المشتريات");
}

function showProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.marginBottom = "10px";
    div.innerHTML = `
            <h3>${product.name}</h3>
            <p>السعر: ${product.price} جنيه</p>
            <button onclick="addToCart(${product.id})">أضف إلى السلة</button>
        `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", showProducts);
