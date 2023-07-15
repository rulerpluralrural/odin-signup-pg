const passwordDisplay = document.getElementById('pass-one-error');
const confirmPassDisplay = document.getElementById('pass-two-error');
const fNameDisplay = document.getElementById('fname-error');
const lNameDisplay = document.getElementById('lname-error');


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

function checkName() {
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const regName = /^[a-zA-Z]+$/;

    if (!regName.test(firstName) || firstName.length < 3) {
        fNameDisplay.textContent = '*Please enter a valid name!'
        fNameDisplay.style.color = 'red' 
    } 
    if (!regName.test(lastName) || lastName.length < 3) {
        lNameDisplay.textContent = '*Please enter a valid name!'
        lNameDisplay.style.color = 'red'
    }
    if (regName.test(firstName)) {
        fNameDisplay.textContent = ''
    }
    if (regName.test(lastName)) {
        lNameDisplay.textContent = ''
    }
}