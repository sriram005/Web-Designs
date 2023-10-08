var msg = document.getElementById('msg')
var msgbox = document.getElementById('msg-box')
var content = document.getElementById('content')
msg.style.display = "none"

function Validate() {
    content.style.display = "none"
    msg.style.display = "block"
    msgbox.className = "container"
    var mail = document.getElementById('mail').value
    var pass = document.getElementById('pass').value
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
    if (!email.test(mail)) {
        msg.innerText = "Invalid email address";
    } else if (!password.test(pass)) {
        msg.innerText = "Invalid password. It must contain at least one uppercase letter, one number, one special character, and be at least 8 characters long"
    } else {
        msg.innerText = "Validation successful!";
    }
    return false;
}