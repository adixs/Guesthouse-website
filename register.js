const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});


const messageType = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};


const setMessage = (type, element, message = "") => {

  const inputGroup = element.parentElement;

  const errorField = inputGroup.querySelector(".error__field");

  switch (type) {
    case messageType.ERROR:
      errorField.innerText = message;
      inputGroup.classList.add("error");
      break;
    case messageType.SUCCESS:
    default:
      errorField.innerText = "";
      inputGroup.classList.remove("error");
      break;
  }
};


const isNumeric = (num) => {
  return !isNaN(num - parseFloat(num));
};

const isValidEmail = (val) => {
  return val.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
};

const validateForm = () => {
  
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  let isFormValid = true;

  if (firstNameValue === "") {
    setMessage(messageType.ERROR, firstName, "First Name is required");
    isFormValid = false;
  } else {
    setMessage(messageType.SUCCESS, firstName);
  }

  if (lastNameValue === "") {
    setMessage(messageType.ERROR, lastName, "Last Name is required");
    isFormValid = false;
  } else {
    setMessage(messageType.SUCCESS, lastName);
  }

  if (userNameValue === "") {
    setMessage(messageType.ERROR, userName, "User Name is required");
    isFormValid = false;
  } else if (userNameValue.length < 3 || userNameValue > 20) {
    setMessage(
      messageType.ERROR,
      userName,
      "User Name should contain 3-20 characters"
    );
    isFormValid = false;
  } else {
    setMessage(messageType.SUCCESS, userName);
  }

  if (emailValue === "") {
    setMessage(messageType.ERROR, email, "Email is required");
    isFormValid = false;
  } else if (!isValidEmail(emailValue)) {
    setMessage(messageType.ERROR, email, "Email is invalid");
    isFormValid = false;
  } else {
    setMessage(messageType.SUCCESS, email);
  }

  if (phoneValue === "") {
    setMessage(messageType.ERROR, phone, "Phone Number is required");
    isFormValid = false;
  } else if (phoneValue.length !== 10) {
    setMessage(
      messageType.ERROR,
      phone,
      "Phone number should contain 10 digits"
    );
    isFormValid = false;
  } else if (!isNumeric(phoneValue)) {
    setMessage(
      messageType.ERROR,
      phone,
      "Phone number should only contain digits"
    );
    isFormValid = false;
  } else {
    setMessage(messageType.SUCCESS, phone);
  }

  if (isFormValid) {
    alert("Form Submitted");
  }
};
