
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const passwordMessage = document.querySelector("#password_message");

confirmPassword.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
    if (password.value !== confirmPassword.value) {
        passwordMessage.textContent = "❗ Passwords do not match!";
        confirmPassword.style.backgroundColor = "#fff0f3";
    } else {
        passwordMessage.textContent = "";
        confirmPassword.style.backgroundColor = "#fff";
    }
}

confirmPassword.addEventListener("blur", function() {
    if (password.value !== confirmPassword.value) {
        passwordMessage.textContent = "❗ Passwords do not match!";
        confirmPassword.style.backgroundColor = "#fff0f3";
        password.value = "";
        confirmPassword.value = "";
        password.focus();
    }
});