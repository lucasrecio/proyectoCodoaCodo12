document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validar campos
        let isValid = true;
        if (username === '') {
            setErrorFor(document.getElementById('username'), 'El nombre de usuario es requerido');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('username'));
        }

        if (email === '') {
            setErrorFor(document.getElementById('email'), 'El correo electrónico es requerido');
            isValid = false;
        } else if (!isEmail(email)) {
            setErrorFor(document.getElementById('email'), 'El correo electrónico no es válido');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('email'));
        }

        if (password === '') {
            setErrorFor(document.getElementById('password'), 'La contraseña es requerida');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('password'));
        }

        if (confirmPassword === '') {
            setErrorFor(document.getElementById('confirm-password'), 'Por favor, confirma tu contraseña');
            isValid = false;
        } else if (password !== confirmPassword) {
            setErrorFor(document.getElementById('confirm-password'), 'Las contraseñas no coinciden');
            isValid = false;
        } else {
            setSuccessFor(document.getElementById('confirm-password'));
        }

        if (isValid) {            
            form.submit();
        }
    });
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.classList.add('error');
    formControl.classList.remove('success');
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function isEmail(email) {
    const re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
}
