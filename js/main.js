// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// Array
let users = loadUsers();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  // User Inputs
  let usernameSignUp = document.getElementById("usernameInput").value;
  let passwordSignUp = document.getElementById("passwordInput").value;
  let passConfirmSignUp = document.getElementById("passwordConfirm").value;

  if (passwordSignUp === passConfirmSignUp) {
    if (checkUsername(usernameSignUp) === true) {
      alert("Username already in use.");
    } else {
      users.push(newUser(usernameSignUp, passwordSignUp));
      loadUsers();
      saveUsers();

      alert("Sign Up Successful");
    }
  } else {
    alert("Passwords don't match.");
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  // User Inputs
  let usernameLogIn = document.getElementById("usernameSignIn").value;
  let passwordLogIn = document.getElementById("passwordSignIn").value;

  for (let i = 0; i < users.length; i++) {
    let userCheck = users[i].username;
    let passCheck = users[i].password;
    if (
      userCheck.includes(usernameLogIn) &&
      passCheck.includes(passwordLogIn)
    ) {
      return alert("Log In Successful!");
    } else {
      alert("Invalid Login Details!!!");
    }
  }
  loadUsers();
}

// HELPER FUNCTIONS

// Check Username for Sign Up
function checkUsername(newUsername) {
  for (let i = 0; i < users.length; i++) {
    let usersCheck = users[i].username;

    if (usersCheck.includes(newUsername)) {
      return true;
    } else {
      false;
    }
  }
}

// New User Info
function newUser(initUsername, initPassword) {
  return {
    username: initUsername,
    password: initPassword,
  };
}

// Save User Info to Local Storage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Load User Info from Local Storage
function loadUsers() {
  let usersStr = localStorage.getItem("users");
  return JSON.parse(usersStr) ?? [];
}
