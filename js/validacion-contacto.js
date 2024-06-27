console.log('Comienzo');

function validarDatos(){ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let msg= document.querySelector('#msg').value;
        let phone= document.querySelector('#phone').value;

        let isValid = true;
        let msgError = 'Datos invalidos: ';

        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(msg);

    if(name === '' || !isName(name)){
        
        isValid = false;
        msgError += " nombre "

    }

    if(email === '' || !isEmail(email)){
        
        isValid = false;
        msgError += " email "
    }

    if(phone != '' && !isNumber(phone)){
         
        msgError += " phone "

    }

    if(msg === ''){
       
        isValid = false;
        msgError += " msg "
    
    }
   
    if (isValid) {            
        form.submit();
        console.log('Datos ingresados correctamente.')
        
    }else{
        console.log(msgError)
    }
}

const formulario = document.querySelector('#contactForm');
let mensaje = document.querySelector('#rtaForm');


formulario.addEventListener('submit', function (event) {

        validarDatos();
        event.preventDefault();
})

function isNumber(phone){
    const re = /^\+\d{2,3}\s\d{9}$/;
    return re.test(phone);
}

function isName(name){
    const re = /^[a-z\s]+$/i;
    return re.test(name);
}

function isEmail(email) {
    const re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
}

