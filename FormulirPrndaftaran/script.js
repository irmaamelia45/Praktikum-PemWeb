const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');
const form = document.getElementById('registrationForm');
const passwordStrength = document.getElementById('passwordStrength');

// Validasi Username
username.addEventListener('keyup', () => {
    const usernameError = document.getElementById('usernameError');
    const regex = /^[a-zA-Z0-9]{5,20}$/;
    usernameError.textContent = regex.test(username.value) ? "" : "Username harus 5-20 karakter alfanumerik.";
});

// Validasi Email
email.addEventListener('change', () => {
    const emailError = document.getElementById('emailError');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.textContent = regex.test(email.value) ? "" : "Email tidak valid.";
});

// Validasi Password dan Kekuatan Password
password.addEventListener('keyup', () => {
    const passwordError = document.getElementById('passwordError');
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    passwordError.textContent = regex.test(password.value) ? "" : "Password harus mencakup huruf dan angka.";

    // Menampilkan Kekuatan Password
    if (password.value.length < 8) {
        passwordStrength.className = 'password-strength password-weak';
    } else if (password.value.length < 12) {
        passwordStrength.className = 'password-strength password-medium';
    } else {
        passwordStrength.className = 'password-strength password-strong';
    }
});

// Validasi Konfirmasi Password
confirmPassword.addEventListener('input', () => {
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError.textContent = (confirmPassword.value === password.value) ? "" : "Konfirmasi password tidak cocok.";
});

// Validasi Terms & Conditions
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const termsError = document.getElementById('termsError');
    termsError.textContent = terms.checked ? "" : "Anda harus setuju dengan syarat dan ketentuan.";

    if (terms.checked && !document.querySelector('.error').textContent) {
        alert("Pendaftaran berhasil!");
        form.reset();
        passwordStrength.className = 'password-strength';
    }
});

// Toggle Password Visibility
function togglePasswordVisibility() {
    const passwordType = password.type === "password" ? "text" : "password";
    password.type = passwordType;
    confirmPassword.type = passwordType;
}
