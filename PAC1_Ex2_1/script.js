const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const age = document.getElementById("age");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
// Check password characters and symbols
function checkPasswordCharacters(input) {
  const reLowerCase = /[a-z]/g;
  const reUpperCase = /[A-Z]/g;
  const reDigit = /[0-9]/g;
  const reSymbols = /[`~!@#$%^&*)(}{\][<>"'\|\\?+=,.:;_-]/g;
  let count = input.value.match(reSymbols);
  if (count === undefined || count === null || count.length === 0) {
    showError(input, `${getFieldName(input)} must contain one symbol`);
    return;
  }
  count = input.value.match(reLowerCase);
  if (count === undefined || count === null || count.length === 0) {
    showError(
      input,
      `${getFieldName(input)} must contain one lower case character`
    );
    return;
  }
  count = input.value.match(reUpperCase);
  if (count === undefined || count === null || count.length === 0) {
    showError(
      input,
      `${getFieldName(input)} must contain one upper case character`
    );
    return;
  }
  count = input.value.match(reDigit);
  if (count === undefined || count === null || count.length === 0) {
    showError(input, `${getFieldName(input)} must contain one digit`);
    return;
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Check number in range
function checkRange(input, min, max) {
  if (isNaN(input.value)) {
    showError(input, `${getFieldName(input)} is not a number`);
  } else if (input.value < min) {
    showError(input, `${getFieldName(input)} must be equal or greater than ${min}`);
  } else if (input.value >= max) {
    showError(input, `${getFieldName(input)} must be lower than ${max}`);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2, age]);
  checkLength(username, 3, 15);
  checkLength(password, 8, 25);
  checkEmail(email);
  checkPasswordCharacters(password);
  checkPasswordsMatch(password, password2);
  checkRange(age, 0, 1000);
});
