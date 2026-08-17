document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("loginMessage");

    if (!loginForm) return;

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        message.textContent =
            "Authentication is not connected yet. Please configure a secure backend.";
    });
});
