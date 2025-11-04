function validateLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('login-message');

  // Clear any previous message
  message.textContent = '';

  if (username === "student" && password === "12345") {
    // ✅ Save login status for student
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", "student");

    message.style.color = "green";
    message.textContent = "Login successful! Redirecting to Student Home...";

    setTimeout(() => {
      window.location.href = "home.html"; // student home page
    }, 1500);

    return false;
  }

  else if (username === "faculty" && password === "12345") {
    // ✅ Save login status for faculty
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", "faculty");

    message.style.color = "green";
    message.textContent = "Login successful! Redirecting to Faculty Dashboard...";

    setTimeout(() => {
      window.location.href = "faculty_dashboard.html"; // faculty dashboard
    }, 1500);

    return false;
  }

  else {
    // ❌ Invalid credentials
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
    return false;
  }
}

// ✅ Logout function (moved outside validateLogin)
function logout() {
  // 🔒 Clear session data
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userRole");

  alert("You have been logged out successfully!");
  window.location.href = "index.html"; // back to login page
}
