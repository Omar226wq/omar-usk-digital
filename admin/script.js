document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("loginMessage");

    if (!loginForm) return;

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        const ADMIN_USERNAME = "admin";
        const ADMIN_PASSWORD = "OMARUSK@2026";

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            window.location.href = "dashboard.html";
        } else {
            message.textContent = "Invalid username or password.";
        }
    });
});
