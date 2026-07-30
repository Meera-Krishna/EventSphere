// =========================================
// SHOW / HIDE PASSWORD
// =========================================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

if (togglePassword && password) {

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            password.type = "password";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}

// =========================================
// REMEMBER ME
// =========================================

const emailInput = document.getElementById("email");
const rememberCheck = document.getElementById("remember");

if (localStorage.getItem("rememberEmail")) {

    emailInput.value = localStorage.getItem("rememberEmail");

    rememberCheck.checked = true;

}

// =========================================
// LOGIN FORM
// =========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = emailInput.value.trim();

    const passwordValue = password.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }

    if (passwordValue.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;

    }

    if (rememberCheck.checked) {

        localStorage.setItem("rememberEmail", email);

    } else {

        localStorage.removeItem("rememberEmail");

    }

    const loginButton =
        document.querySelector(".login-btn");

    loginButton.disabled = true;

    loginButton.innerHTML =

        '<i class="fa-solid fa-spinner fa-spin"></i> Logging In...';

    setTimeout(() => {

        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem("userEmail", email);

        alert("Login Successful 🎉");

        window.location.href = "events.html";

    }, 1800);

});

// =========================================
// GOOGLE BUTTON
// =========================================

const googleBtn = document.querySelector(".google-btn");

googleBtn.addEventListener("click", () => {

    alert("Google Login will be added in the next version.");

});

// =========================================
// ENTER KEY
// =========================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        loginForm.requestSubmit();

    }

});

// =========================================
// AUTO FOCUS
// =========================================

window.onload = () => {

    emailInput.focus();

};

// =========================================
// LOG
// =========================================

console.log("✅ Login Page Loaded");