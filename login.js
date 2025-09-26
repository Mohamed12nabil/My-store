document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    const loginMessage = document.getElementById("loginMessage");

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // حفظ حالة تسجيل الدخول
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      loginMessage.style.color = "green";
      loginMessage.textContent =
        "تم تسجيل الدخول بنجاح! سيتم تحويلك للصفحة الرئيسية...";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    } else {
      loginMessage.style.color = "red";
      loginMessage.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
    }
  });
