//declaracion de variables para proyecto
let lista = document.querySelectorAll('.lista');
let box = document.querySelectorAll('.box');


//declaracion de variables para el formulario
const btnEnviar = document.getElementById('send');
const nombreDeUsuario = document.getElementById('nombre');
const correo = document.getElementById('email');
const mensaje = document.getElementById('message');
const forma = document.getElementById('formulario');



//ciclo  para filtrar los proyectos atravez del elemento de escucha click

for (let i = 0; i < lista.length; i++) {
  lista[i].addEventListener('click', function () {
    //for para remover y add la clase active
    for (let j = 0; j < lista.length; j++) {
      lista[j].classList.remove('active');
    }
    this.classList.add('active')
    //variable para obtener el contenidos de data-filter
    let filtro = this.getAttribute('data-filter');
    // for para ocultar y mostrar segun los seleccionado
    for (let k = 0; k < box.length; k++) {
      box[k].classList.remove('active');
      box[k].classList.add('hide');

      if (box[k].getAttribute('data-item') == filtro || filtro == "all") {
        box[k].classList.remove('hide');
        box[k].classList.add('active');
      }
    }


  })
}


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

  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    email.focus();
    return false;
  }
  if (message.value === "") {
    alert("Por favor, dejanos un comentario.");
    message.focus();
    return false;
  } else {
    alert('Gracias por escribirnos en breve nos pondremos en contacto');
    forma.reset();
  }


  return true;

}


//Evento de escucha para validar la forma

btnEnviar.addEventListener('click', validación);
//Creacion de navar

const texto = document.getElementById('navegando');
texto.innerHTML=`
<h1 class="navegar__title">PORTAFOLIO</h1>
<ul class="navegacion">
  <li class="nav-list"><a href="#home" class="nav-link">HOME</a></li>
  <li class="nav-list"><a href="#about" class="nav-link">ABOUT ME</a></li>
  <li class="nav-list">
    <a href="#proyecto" class="nav-link">PROYECTO</a>
  </li>
  <li class="nav-list">
    <a href="#contact" class="nav-link">CONTACT</a>
  </li>
</ul>
<button class="menu-hamburguesa" id="menu-hamburguesa">
  <ion-icon class="barras" name="menu-outline"></ion-icon>
</button>
`;
//constantes para el menu hamburguesas
const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector(".navegacion");
const nav = document.querySelector(".navegar");

//eventos de escucha para 
burger.addEventListener("click",function (){
  ul.classList.toggle("show");
});

// Cerrar el menú de hambuguesa cuando se hace click en un enlace  

// Seleccionar enlaces de navegación
const navLink= document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);











