document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const createAccountLink = document.querySelector(".signin a[href='#']");


  const popup = document.createElement("div");
  popup.classList.add("popup-overlay");
  popup.innerHTML = `
    <div class="popup-box">
      <h2>Create Account</h2>
      <form id="createAccountForm">
        <input type="text" id="name" placeholder="Full Name" required><br>
        <input type="email" id="email" placeholder="Email" required><br>
        <input type="password" id="password" placeholder="Password" required><br>
        <div class="popup-buttons">
          <button type="submit" class="popup-submit">Create</button>
          <button type="button" class="popup-cancel">Cancel</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(popup);
  popup.style.display = "none";


  createAccountLink.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
  });


  popup.querySelector(".popup-cancel").addEventListener("click", () => {
    popup.style.display = "none";
  });


  const createForm = document.getElementById("createAccountForm");
  createForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters long.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      alert("This email is already registered.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully! You can now log in.");
    popup.style.display = "none";
    createForm.reset();
  });


  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert(`Welcome to Pinoy Crumbs, ${user.name}!`);
      window.location.href = "index.html";
    } else {
      alert("Incorrect email or password.");
    }
  });
});