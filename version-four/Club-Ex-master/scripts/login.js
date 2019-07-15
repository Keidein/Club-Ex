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
        location.href = "./grouping.html";
    }
}

function login() {
    const data = {
        user1: "pass1", 
        user2: "pass2",
        user3: "pass3",
        user4: "pass4"
    }

    usernameCheck = false;
    passwordCheck = false;

    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value <= 5 || !(username.value in data)) {
        document.getElementById("username").placeholder = "Error With Username";
        document.getElementById("username").style.border="3px solid #FB3640";
        usernameCheck = false;
    } else {
        usernameCheck = true;
    }

    if (password.value <= 5 || password.value != data[username.value]) {
        document.getElementById("password").placeholder = "Error With Password";
        document.getElementById("password").style.border="3px solid #FB3640";
        passwordCheck = false;
    } else {
        document.getElementById("password-error").style.visibility = "hidden";
        passwordCheck = true;
    }

    if (usernameCheck && passwordCheck) {
        if (username.value in data && password.value == data[username.value]) {
            location.href = "./grouping.html";
        }
    }


    /*
    if (username.value <= 5 || !(username.value in data)) {
        document.getElementById("username-error").style.visibility = "visible";
        usernameCheck = false;
    } else {
        document.getElementById("username-error").style.visibility = "hidden";
        usernameCheck = true;
    }

    if (password.value <= 5 || password.value != data[username.value]) {
        document.getElementById("password-error").style.visibility = "visible";
        passwordCheck = false;
    } else {
        document.getElementById("password-error").style.visibility = "hidden";
        passwordCheck = true;
    }

    if (usernameCheck && passwordCheck) {
        if (username.value in data && password.value == data[username.value]) {
            location.href = "./grouping.html";
        }
    }
    */
}