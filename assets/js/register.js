// =========================================
// PASSWORD TOGGLE
// =========================================

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.querySelector(".toggle-password");
const toggleConfirm = document.querySelector(".toggle-confirm");

togglePassword.addEventListener("click", () => {

    if(password.type==="password"){

        password.type="text";

        togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

    }else{

        password.type="password";

        togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';

    }

});

toggleConfirm.addEventListener("click",()=>{

    if(confirmPassword.type==="password"){

        confirmPassword.type="text";

        toggleConfirm.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

    }

    else{

        confirmPassword.type="password";

        toggleConfirm.innerHTML='<i class="fa-solid fa-eye"></i>';

    }

});

// =========================================
// PASSWORD STRENGTH
// =========================================

const strengthBar=document.getElementById("strengthBar");
const strengthText=document.getElementById("strengthText");

password.addEventListener("keyup",()=>{

    const value=password.value;

    let strength=0;

    if(value.length>=8) strength++;

    if(/[A-Z]/.test(value)) strength++;

    if(/[0-9]/.test(value)) strength++;

    if(/[!@#$%^&*]/.test(value)) strength++;

    switch(strength){

        case 1:

            strengthBar.style.width="25%";

            strengthBar.style.background="red";

            strengthText.innerHTML="Weak Password";

            break;

        case 2:

            strengthBar.style.width="50%";

            strengthBar.style.background="orange";

            strengthText.innerHTML="Medium Password";

            break;

        case 3:

            strengthBar.style.width="75%";

            strengthBar.style.background="#00D4FF";

            strengthText.innerHTML="Good Password";

            break;

        case 4:

            strengthBar.style.width="100%";

            strengthBar.style.background="limegreen";

            strengthText.innerHTML="Strong Password";

            break;

        default:

            strengthBar.style.width="0";

            strengthText.innerHTML="Password Strength";

    }

});

// =========================================
// REGISTER
// =========================================

const registerForm=document.getElementById("registerForm");

registerForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=document.getElementById("name").value.trim();

    const email=document.getElementById("email").value.trim();

    const phone=document.getElementById("phone").value.trim();

    const pass=password.value.trim();

    const confirm=confirmPassword.value.trim();

    const terms=document.getElementById("terms");

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.length<3){

        alert("Enter a valid name");

        return;

    }

    if(!emailRegex.test(email)){

        alert("Enter a valid email");

        return;

    }

    if(!/^[0-9]{10}$/.test(phone)){

        alert("Phone number must contain 10 digits.");

        return;

    }

    if(pass!==confirm){

        alert("Passwords do not match.");

        return;

    }

    if(!terms.checked){

        alert("Accept Terms & Conditions");

        return;

    }

    const user={

        name,

        email,

        phone,

        password:pass

    };

    localStorage.setItem("user",JSON.stringify(user));

    alert("🎉 Registration Successful!");

    window.location.href="login.html";

});

console.log("Register Page Loaded");