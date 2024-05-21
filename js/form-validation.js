const userNameField = document.getElementById('name');
const emailField = document.getElementById('email');
const msgField = document.getElementById('msg');
const phoneField = document.getElementById('phone');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();

});

const setErrorFor = (input,message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small'); 

    small.innerText = '';
    formControl.classList.add('error')
    formControl.classList.remove('sucess');
}

const isEmail = email => {
    const re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(String(email).toLowerCase());
}

function checkInputs(){

    const userNameFieldValue = userNameField.value.trim();
    const emailFieldValue = emailField.value.trim();
    const msgFieldValue = msgField.value.trim();
    const phoneFieldValue = phoneField.value.trim();

    if(userNameFieldValue === ''){

        setErrorFor(userNameField, '* Nombre completo es requerido');

    }else{

        setSuccessFor(userNameField);

    }
    if(emailFieldValue === ''){

        setErrorFor(emailField, '* Email es requerido');

    }else if (!isEmail(emailFieldValue)){
   
        setErrorFor(emailField, '* Email no es valido');

    }else{

        setErrorFor(emailField);
    }

    if(msgFieldValue === ''){

        setErrorFor(msgField, '* Mensaje es requerido');

    }else{

        setSuccessFor(msgField);

    }

    if(phoneFieldValue === ''){

        setSuccessFor(phoneField);

    }else{
      
        setSuccessFor(phoneField);
    }

}

function setErrorFor (input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small'); 

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}



