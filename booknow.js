const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const countryCode = document.getElementById("countryCode");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const guests = document.getElementById("guests");

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

const isValidPhoneNumber = (code, number) => {
    
    const countryCodePattern = /^\+\d{1,4}$/;
    const phonePattern = /^\d{7,10}$/;

    return countryCodePattern.test(code) && phonePattern.test(number);
};

const validateForm = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const countryCodeValue = countryCode.value.trim();
    const checkinValue = checkin.value;
    const checkoutValue = checkout.value;
    const guestsValue = guests.value.trim();


    let isFormValid = true;

    if (nameValue === "") {
        setMessage(messageType.ERROR, name, "Full Name is required");
        isFormValid = false;
    } else {
        setMessage(messageType.SUCCESS, name);
    }

    if (emailValue === "") {
        setMessage(messageType.ERROR, email, "Email is required");
        isFormValid = false;
    } else if (!isValidEmail(emailValue)) {
        setMessage(messageType.ERROR, email, "Please provide a valid email");
        isFormValid = false;
    } else {
        setMessage(messageType.SUCCESS, email);
    }

    if (countryCodeValue === "" || phoneValue === "") {
        setMessage(messageType.ERROR, phone, "Country code and phone number are required");
        isFormValid = false;
    } else if (!isValidPhoneNumber(countryCodeValue, phoneValue)) {
        setMessage(messageType.ERROR, phone, "Please provide a valid country code and phone number");
        isFormValid = false;
    } else {
        setMessage(messageType.SUCCESS, phone);
    }

    if (checkinValue === "") {
        setMessage(messageType.ERROR, checkin, "Check-in date is required");
        isFormValid = false;
    } else {
        setMessage(messageType.SUCCESS, checkin);
    }

    if (checkoutValue === "") {
        setMessage(messageType.ERROR, checkout, "Check-out date is required");
        isFormValid = false;
    } else {
        setMessage(messageType.SUCCESS, checkout);
    }

    if (guestsValue === "") {
        setMessage(messageType.ERROR, guests, "Number of guests is required");
        isFormValid = false;
    } else if (!isNumeric(guestsValue)) {
        setMessage(messageType.ERROR, guests, "Please provide a valid number");
        isFormValid = false;
    } else {
        setMessage(messageType.SUCCESS, guests);
    }

    if (isFormValid) {
        alert("Form is valid! Submitting...");
    }
};
