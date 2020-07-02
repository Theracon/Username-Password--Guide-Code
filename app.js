// DOM nodes
const submitDOM = document.querySelector('input[type="submit"]');
const usernameDOM = document.querySelector('input[type="text"]');
const passwordDOM = document.querySelector('input[type="password"]');

// Regular expression to check for username conformity
const usernameRegex = /^[a-z]([0-9][0-9]|[a-z]+\d*)$/i;

// Regular expressions to check for password conformity
const passwordRegex1 = /[A-Z]+/;
const passwordRegex2 = /[a-z]+/;
const passwordRegex3 = /\d+/;
const passwordRegex4 = /\W+/;
const passwordRegex5 = /\s/;

// Click listener for "submit" button
submitDOM.addEventListener('click', () => {
  // Test username
  if(usernameRegex.test(usernameDOM.value)) {
    alert('Username Excellent!');
  } else {
    alert('Username incorrect. Please abide by username rules.');
  }
  
  // Test password
  if(passwordDOM.value.length >= 8 && passwordRegex1.test(passwordDOM.value) && passwordRegex2.test(passwordDOM.value) && passwordRegex3.test(passwordDOM.value) && passwordRegex4.test(passwordDOM.value) && (passwordRegex5.test(passwordDOM.value) == false)) {
    alert('Password Excellent!');
  } else {
    alert('Password incorrect. Please abide by password rules.');
  }
});