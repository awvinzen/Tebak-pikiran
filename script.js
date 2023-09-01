const inputPassword = document.getElementById("input-password");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");
submitButton.addEventListener("click", () => {
  const password = inputPassword.value;
  if (password.length > 7) {
    errorMessage.textContent = "Password Valid";
    errorMessage.style.color = "green";
  } else {
    errorMessage.textContent = "Password Terlalu Pendek";
    errorMessage.style.color = "red";
  }
});
