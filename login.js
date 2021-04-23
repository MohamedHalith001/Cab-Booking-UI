<<<<<<< HEAD
function login() {
    event.preventDefault();
    let mobileNumber = document.getElementById("mobileNumber").value;
    let password = document.getElementById("pass").value;
    //Calling checkMobile and checkPass and executing commands based on result
    if (checkMobile(mobileNumber) && checkPass(password)) {
        alert("Login Successful");
        window.location.replace('CabDetails.html');
    } else {
        alert("Enter correct username and password");
    }
};
/**
 * Verifies user's mobile number.
 * @param {String} mobileNumber 
 */
function checkMobile(mobileNumber) {
    if (mobileNumber == 9524896959) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * Verifies user's password
 * @param {String} password 
 */
function checkPass(password) {
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}
=======
function login() {
    event.preventDefault();
    let mobile = document.getElementById("mobile");
    let pass = document.getElementById("pass");
    let mobileno = mobile.value;
    let password = pass.value;
    //Calling checkMobile and checkPass and executing commands based on result
    if (checkMobile(mobileno) && checkPass(password)) {
        alert("Login Successful");
        window.location.replace('CabDetails.html');
    } else {
        alert("Enter correct username and password");
    }
};
//Validates mobile no
function checkMobile(mobileno) {
    if (mobileno == 9524896959) {
        return true;
    }
    else {
        return false;
    }
}
//Validates password
function checkPass(password) {
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}
>>>>>>> refs/remotes/origin/main
