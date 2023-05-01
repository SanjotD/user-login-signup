// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  // User Inputs
  let usernameSignUp = document
    .getElementById("usernameInput")
    .value.toLowerCase();
  let passwordSignUp = document
    .getElementById("passwordInput")
    .value.toLowerCase();
  let passConfirmSignUp = document
    .getElementById("passwordConfirm")
    .value.toLowerCase();
  console.log("Sign Up Btn Clicked");

  if (passwordSignUp === passConfirmSignUp) {
    //save
    console.log("save");
  } else {
    alert("passwords dont match");
  }

  console.log(usernameSignUp);
  console.log(passwordSignUp);
  console.log(passConfirmSignUp);
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  console.log("Sign In Btn Clicked");
}
