const generateBtn = document.getElementById('generate');
const passwordField = document.getElementById('password');

generateBtn.addEventListener('click', generatePassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const password = generateRandomPassword(length);
    passwordField.value = password;
}

function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}
