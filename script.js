const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous error/success styles
  [username, email, password, password2].forEach(clearState);

  let isValid = true;

  // Required checks
  if (username.value.trim() === '') {
    showError(username, 'Username is required');
    isValid = false;
  }

  if (email.value.trim() === '') {
    showError(email, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
    isValid = false;
  }

  if (password.value.trim() === '') {
    showError(password, 'Password is required');
    isValid = false;
  } else if (password.value.length < 6) {
    showError(password, 'Password must be at least 6 characters');
    isValid = false;
  }

  if (password2.value.trim() === '') {
    showError(password2, 'Confirmation is required');
    isValid = false;
  } else if (password2.value !== password.value) {
    showError(password2, 'Passwords do not match');
    isValid = false;
  }

  if (isValid) {
    alert('Registration successful!');
    form.reset();
  }
});

function showError(input, message) {
  const control = input.parentElement;
  control.classList.add('error');
  const small = control.querySelector('.error-msg');
  small.textContent = message;
}

function clearState(input) {
  const control = input.parentElement;
  control.classList.remove('error', 'success');
  control.querySelector('.error-msg').textContent = '';
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}
