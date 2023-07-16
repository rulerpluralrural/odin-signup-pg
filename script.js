const passwordDisplay = document.getElementById('pass-one-error');
const confirmPassDisplay = document.getElementById('pass-two-error');
const fNameDisplay = document.getElementById('fname-error');
const lNameDisplay = document.getElementById('lname-error');
const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');

fname.addEventListener('keyup', function () {checkName(fNameDisplay, this.value)})
lname.addEventListener('keyup', function() {checkName(lNameDisplay, this.value)})

function matchPass() {
    const password = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirm-password').value;

    if (password !== confirmPass) {
        confirmPassDisplay.textContent = '*Your Password doesn\'t match!';
        confirmPassDisplay.style.color = 'red';
    }
    if (password == confirmPass) {
        confirmPassDisplay.textContent = '*Password Matched!';
        confirmPassDisplay.style.color = 'green';
    }
}

function check() {
    const password = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirm-password').value;
    if (password == '') {
        passwordDisplay.textContent = '*Please Fill in the password!';
        passwordDisplay.style.color = 'red';
    }
    if (password !== confirmPass) {
        passwordDisplay.textContent = '*Password doesn\'t match';
        passwordDisplay.style.color = 'red';
    }
}

function checkName(display, input) {
    const regName = /^[a-zA-Z]+$/;

    if (!regName.test(input) || input.length < 3) {
        display.textContent = '*Please enter a valid name!'
        display.style.color = 'red'
    } else if (regName.test(input)) {
        display.textContent = ''
    }
}