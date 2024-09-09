const passwordBtn = document.getElementById("password-eye");

passwordBtn.addEventListener("click", (e) => {
  const passwordInput = document.getElementById("password");
  const icon = passwordBtn.querySelector("i");
  const isVisible = icon.classList.contains("ri-eye-line");
  passwordInput.type = isVisible ? "password" : "text";
  icon.setAttribute("class", isVisible ? "ri-eye-off-line" : "ri-eye-line");
});

const loginForm = document.querySelector(".login__form");
const emailInput = loginForm.querySelector("#email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("input", () => {
  if (isValidEmail(emailInput.value.trim())) {
    showSuccess(emailInput);
  } else {
    showError(emailInput, "Please enter a valid email address.");
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.trim().length >= 6) {
    showSuccess(passwordInput);
  } else {
    showError(passwordInput, "Password must be at least 6 characters.");
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  let isValid = true;

  const emailValue = emailInput.value.trim();
  if (!emailValue || !isValidEmail(emailValue)) {
    showError(emailInput, "Please enter a valid email address.");
    isValid = false;
  } else {
    showSuccess(emailInput);
  }

  const passwordValue = passwordInput.value.trim();
  if (!passwordValue || passwordValue.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters.");
    isValid = false;
  } else {
    showSuccess(passwordInput);
  }

  if (isValid) {
    loginForm.submit();
  }
});

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(input, message) {
  const inputGroup = input.parentElement;
  let errorField = inputGroup.querySelector(".error__field");
  
  if (!errorField) {
    errorField = document.createElement("span");
    errorField.className = "error__field";
    errorField.style.color = "red";
    errorField.style.fontSize = "0.9rem";
    inputGroup.appendChild(errorField);
  }
  
  errorField.innerText = message;
  input.style.borderColor = "red";
}

function showSuccess(input) {
  const inputGroup = input.parentElement;
  const errorField = inputGroup.querySelector(".error__field");
  
  if (errorField) {
    errorField.innerText = "";
  }
  
  input.style.borderColor = "";
}
