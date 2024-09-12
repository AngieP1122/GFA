document.getElementById('loginForm').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMessage = '';

    if (nombre === '' || correo === '' || password === '') {
        errorMessage = 'Por favor, completa todos los campos.';
    } else if (!validateEmail(correo)) {
        errorMessage = 'El formato del correo electrónico es inválido.';
    }

    if (errorMessage) {
        event.preventDefault();
        document.getElementById('error-message').textContent = errorMessage;
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
