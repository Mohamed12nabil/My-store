document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = event.target.username.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    const message = document.getElementById("message");

    // جلب المستخدمين المخزنين أو مصفوفة جديدة
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    // التحقق من وجود البريد الإلكتروني مسبقاً
    if (users.some((user) => user.email === email)) {
      message.textContent = "هذا البريد الإلكتروني مستخدم بالفعل.";
      return;
    }

    // إضافة مستخدم جديد
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    message.style.color = "green";
    message.textContent = "تم التسجيل بنجاح، يمكنك الآن تسجيل الدخول.";

    // إعادة تعيين النموذج بعد التسجيل
    event.target.reset();
  });
