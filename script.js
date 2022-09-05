const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const createAccount = document.querySelector(".account__button");
const error = document.querySelector("#errorMsg");

if (password.textContent != confirmPassword.textContent) {
  error.textContent.add("Passwords do not match");
}
