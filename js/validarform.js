//validar el formulario
const datos = {
    nombre:'',
    email:'',
    mensaje:''
}

const nombreInput = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombreInput.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

//el evento de submit
 formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    //validar el formulario
    const{nombre,email,mensaje} = datos;
    if(nombre ==='' ||email ==='' ||mensaje ===''){
        mostrarAlerta('Todos los campos son obligatorios',true);
        return //corta la ejecucion del codigo
    }
    //crear la otra alerta de enviar correctamente
    mostrarAlerta('Mensaje envidado correctamente')
 });

 function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
 }

 //refactorizar dos funciones en 1

 function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList('correcto')
    }
    formulario.appendChild(alerta);

    //desaparezca despues de 5 segundo
    setTimeout(()=>{
        error.remove();
     },5000);
 }