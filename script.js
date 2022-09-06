const passOne = document.querySelector("#password");
const passTwo = document.querySelector("#confirm-password");
const createAccount = document.querySelector(".account__button");
const error = document.querySelector("#errorMsg");

function checkPassword() {
  error.innerText =
    passOne.value == passTwo.value ? "" : "Passwords do not match";
}

if (checkPassword == false) {
    passOne.classList.add('error');
    passTwo.classList.add('error');
}

passOne.addEventListener('keyup', () => {
    if (passTwo.value.length != 0) checkPassword();
})

passTwo.addEventListener('keyup', checkPassword);


