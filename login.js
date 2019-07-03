function createLogin() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");

    if (username.value.length <= 5) {
        document.getElementById("username-error").style.visibility = "visible";
    }

    if (password.value.length <= 5) {
        document.getElementById("password-error").style.visibility = "visible";
    }

    if (email.value.length <= 5) {
        document.getElementById("email-error").style.visibility = "visible";
    }
}