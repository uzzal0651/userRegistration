//
//
const formButtonSubmit = document.getElementById("form-btnSubmit");

//console.log(userEmail.value);

// pass word format

//Minimum eight characters, at least one letter and one number:
function passwordChecker() {
  //event.preventDefault();
  const passWordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const passTargt = document.getElementById("pass-word");
  const passValidation = document.getElementById("pass-validation");
  const passTargtValue = passTargt.value;
  console.log(passTargtValue);

  if (!passWordFormat.test(passTargtValue)) {
    //alert("Password is not valid");
    passValidation.innerHTML =
      "Password is not valid(Minimum eight characters, at least one letter and one number:)";
    //document.getElementById("name").focus();
    return false;
  } else {
    //alert("Valid password given.");
    passValidation.innerHTML = "Valid password given";
    return true;
  }
}

//passwordChecker();

// validatoin email check

function emailChecker() {
  //event.preventDefault();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const userEmail = document.getElementById("user-email");
  const emailValidation = document.getElementById("email-validation");
  const userEmailTarget = userEmail.value;

  if (!mailformat.test(userEmailTarget)) {
    //alert("email is not valid");
    emailValidation.innerHTML = "email is not valid";
    //document.getElementById("name").focus();

    return false;
  } else {
    //alert("Valid email name given.");
    emailValidation.innerHTML = "Valid email name given.";
    return true;
  }
  //
  //
}

//emailChecker();

// Validation user name
function userLoginName() {
  //event.preventDefault();
  var regName2 = /^[a-z]\S*\d+\S*$/;
  const userName2 = document.getElementById("user-name2");
  const userValidation = document.getElementById("user-validation");
  const targetValue2 = userName2.value;
  //console.log(targetValue2);

  if (!regName2.test(targetValue2)) {
    //alert("User Name should use small word with digit");
    userValidation.innerHTML = "User Name should use small word with digit";
    //document.getElementById("name").focus();
    return false;
  } else {
    userValidation.innerHTML = "Valid  User Login Name given.";
    //alert("Valid name given.");
    return true;
  }
}

//userLoginName();

function userNameChecker() {
  var regName = /^[A-Z]+[A-zA-Z][^0-9]*$/;
  const userName = document.getElementById("user-name");
  const nameValidation = document.getElementById("name-validation");

  //event.preventDefault();
  const targetValue = userName.value;
  console.log(regName.test(targetValue));

  if (!regName.test(targetValue)) {
    //alert("First Letter Should Be Upppercase And Digit are not allow.");
    // document.getElementById("name").focus();
    nameValidation.innerHTML =
      "First Letter Should Be Upppercase And Digit are not allow.";
  } else {
    //alert("Valid name given.");
    nameValidation.innerHTML = "Valid name given.";
  }
}

formButtonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  userNameChecker();
  userLoginName();
  emailChecker();
  passwordChecker();
});
