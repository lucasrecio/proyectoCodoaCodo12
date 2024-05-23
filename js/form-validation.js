const formulario = document.querySelector('contactForm');
formulario.addEventListener('submit', function (event) {
    
        event.preventDefault();
   
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value;
        const msg= document.getElementById('msg').value.trim();
   
    let isValid = true;
    if(name === ''){
        setErrorFor(document.getElementById('name'), 'El nombre es requerido');
        isValid = false;
    }else{
        setSuccessFor(document.getElementById('name'));
    }
    if(email === ''){
        setErrorFor(document.getElementById('email'), 'El email es requerido');
        isValid = false;
    }else{
        setSuccessFor(document.getElementById('email'));
    }
    if(phone === ''){
        setSuccessFor(document.getElementById('phone'));
    }else{
        setSuccessFor(document.getElementById('phone'));
    }
    if(msg === ''){
        setErrorFor(document.getElementById('msg'), 'El mensaje es requerido');
        isValid = false;
    }else{
        setSuccessFor(document.getElementById('msg'));
    }
    
    if (isValid) {            
        form.submit();
    }
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

