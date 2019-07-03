function createLogin() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");

    usernameCheck = false;
    passwordCheck = false;
    emailCheck = false;

    if (username.value.length <= 5) {
        document.getElementById("username-error").style.visibility = "visible";
        usernameCheck = false;
    } else {
        document.getElementById("username-error").style.visibility = "hidden";
        usernameCheck = true;
    }

    if (password.value.length < 5) {
        document.getElementById("password-error").style.visibility = "visible";
        passwordCheck = false;
    } else {
        document.getElementById("password-error").style.visibility = "hidden";
        passwordCheck = true;
    }

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email.value)) {
        document.getElementById("email-error").style.visibility = "visible";
        emailCheck = false;
    } else {
        document.getElementById("email-error").style.visibility = "hidden";
        emailCheck = true;
    }

    if (usernameCheck && passwordCheck && emailCheck) {
        console.log("Finished!");
    }
}