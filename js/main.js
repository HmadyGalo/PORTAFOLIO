//declaracion de variables
const btnEnviar=document.getElementById('send');
const nombreDeUsuario =document.getElementById('nombre');
const correo = document.getElementById('email');
const mensaje = document.getElementById('message');
const forma= document.getElementById('formulario');

//patron del correo valido

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//Funcion de Validacion

const validación = (e) => {
  e.preventDefault();
  

  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre.");
    nombre.focus();
    return false;
  }
  if (message.value === "") {
    alert("Por favor, dejanos un comentario.");
    message.focus();
    return false;
  }
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
   email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    email.focus();
    return false;
  } else{
    alert('Gracias por escribirnos en breve nos pondremos en contacto');
    forma.reset();
  }

  
  return true; 
  
}


//Evento de escucha para validar la forma

btnEnviar.addEventListener('click', validación);









