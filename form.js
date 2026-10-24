const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const correo = document.querySelector("#correo");
const programa = document.querySelector("#programa");
const formulario = document.querySelector("#formulario");
const btnGuardar = document.querySelector("#btnGuardar");
const btnLimpiar = document.querySelector("#btnLimpiar");

// Evento de Ventana para Cargar
window.addEventListener("load", function () {
  document.querySelector("#bienvenida").textContent =
    "Bienvenido al Registro de Estudiantes";
  document.querySelector("#fechaHora").textContent =
    new Date().toLocaleString();
  // El new Date().toLocaleString(); se utiliza para insertar fecha y hora actual en Js
});

// Evento para Nombre
nombre.addEventListener("input", function () {
  document.querySelector("#msgNombre").textContent =
    "Escribiendo: " + nombre.value;
});

// Evento para Correo con blur
correo.addEventListener("blur", function () {
  const msg = document.querySelector("#msgCorreo");
  if (correo.value.includes("@")) {
    msg.textContent = "";
  } else {
    msg.textContent = "Error ⚠️​: El correo no es valido: Falta el simbolo @";
  }
});

// Evento para Edad
edad.addEventListener("input", function () {
  const msg = document.querySelector("#msgEdad");
  if (edad.value === "") {
    msg.textContent = "";
  } else if (edad.value < 18) {
    msg.textContent = "Eres menor de edad";
  } else {
    msg.textContent = "Eres mayor de edad";
  }
});

// Formulario: submit usando innerHTML
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Se usa para que la pagina no se recargue
  document.querySelector("#resultado").innerHTML =
  // tarjeta bootstrap con los datos agregados
    '<div class="card">' +
    '<div class="card-header">Datos del estudiante</div>' +
    '<div class="card-body">' +
    "<p class='mb-1'><b>Nombre:</b> " +
    nombre.value +
    "</p>" +
    "<p class='mb-1'><b>Apellido:</b> " +
    apellido.value +
    "</p>" +
    "<p class='mb-1'><b>Edad:</b> " +
    edad.value +
    "</p>" +
    "<p class='mb-1'><b>Correo:</b> " +
    correo.value +
    "</p>" +
    "<p class='mb-0'><b>Programa:</b> " +
    programa.value +
    "</p>" +
    "</div>" +
    "</div>";
});

// Boton para Guardar con los eventos mouseenter, mouseleave y click
btnGuardar.addEventListener("mouseenter", function () {
  btnGuardar.classList.replace("btn-primary", "btn-success");
});

btnGuardar.addEventListener("mouseleave", function () {
  btnGuardar.classList.replace("btn-success", "btn-primary");
});

btnGuardar.addEventListener("click", function () {
  Swal.fire({
    icon: "success",
    title: "¡Guardado!",
    text: "Información guardada correctamente",
    confirmButtonText: "Aceptar",
  });
});

// Boton para limpiar con dblclick
btnLimpiar.addEventListener("dblclick", function () {
  formulario.reset();
  document.querySelector("#msgNombre").textContent = "";
  document.querySelector("#msgEdad").textContent = "";
  document.querySelector("#msgCorreo").textContent = "";
  document.querySelector("#resultado").innerHTML = "";
});
