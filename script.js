const form = document.getElementById("form");
const password1Elem = document.getElementById("password1");
const password2Elem = document.getElementById("password2");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Contraint API, check whether form is valid or not
  isValid = form.checkValidity();

  //   Check if passwords match
  if (password1Elem.value === password2Elem.value) {
    passwordsMatch = true;
    password1Elem.style.borderColor = "green";
    password2Elem.style.borderColor = "green";
  } else {
    passwordsMatch = "false";
    password1Elem.style.borderColor = "red";
    password2Elem.style.borderColor = "red";
    return;
  }
}

function storeFormDate() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFormData(e) {
  // do not submit to server, stop refreshing pages
  e.preventDefault();
  //   Validate Form
  validateForm();
  //   Submit Data if valid
  if (isValid && passwordsMatch) {
    storeFormDate();
  }
}

// Event Listener
form.addEventListener("submit", processFormData);
