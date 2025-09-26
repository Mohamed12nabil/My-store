function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function showCart() {
  const container = document.getElementById("cart-container");
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>السلة فارغة.</p>";
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.marginBottom = "10px";
    div.innerHTML = `
            <h3>${item.name}</h3>
            <p>السعر: ${item.price} جنيه</p>
            <p>الكمية: ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">حذف</button>
        `;
    container.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.style.fontWeight = "bold";
  totalDiv.style.marginTop = "15px";
  totalDiv.textContent = `المجموع الكلي: ${total} جنيه`;
  container.appendChild(totalDiv);
}

document.addEventListener("DOMContentLoaded", showCart);
