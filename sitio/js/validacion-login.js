document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    
    
    var usernameError = '';
    var passwordError = '';
    
    if (username === '') {
        usernameError = 'El campo de usuario está vacío.';    }

   
    if (password === '') {
        passwordError = 'El campo de contraseña está vacío.';    }

    
    if (usernameError !== '' || passwordError !== '') {
        event.preventDefault();

        
        var errorMessage = '';
        if (usernameError !== '') {
            errorMessage += usernameError + '\n';
        }
        if (passwordError !== '') {
            errorMessage += passwordError + '\n';
        }
        alert(errorMessage);
    }
});

