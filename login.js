document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const message = document.getElementById("loginMessage");
  // عند نجاح تسجيل الدخول
  window.location.href = "products.html";

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    message.textContent = "لا يوجد حساب مسجل. قم بالتسجيل أولاً.";
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    // ✅ حفظ حالة تسجيل الدخول
    localStorage.setItem("isLoggedIn", "true");
    // ✅ الانتقال إلى صفحة المنتجات
    window.location.href = "products.html";
  } else {
    message.style.color = "red";
    message.textContent = "بيانات الدخول غير صحيحة.";
  }
});
// بعد التحقق من البريد وكلمة المرور
localStorage.setItem("loggedInUser", JSON.stringify(user));
window.location.href = "products.html";
