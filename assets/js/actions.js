//Obtener referencias desde los elementos del formulario HTML
let nombre = document.getElementById("nombre");
let nombreError = document.getElementById("nombreError");
let rut = document.getElementById("rut");
let rutError = document.getElementById("rutError");
let genero = document.getElementById("genero");
let generoError = document.getElementById("generoError");
let mensaje = document.getElementById("mensaje");
let mensajeError = document.getElementById("mensajeError");
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");

let form = document.getElementById("myForm");

//Prevenir el evento por defecto de los formularios al dar clic en el boton enviar
form.addEventListener("submit", function(event){
    event.preventDefault(); //Prevenir la recarga automática del formulario
    validarFormulario();
});

// Función para validar el RUT
function validarRut(rut) {
    // Formato permitido: 12345678-9 o 12345678-K
    var rutFormato = /^(\d{7,8})-(\d|K)$/; // formato del RUT
    return rutFormato.test(rut.value);
}

// Función para validar el Formulario
function validarFormulario() {
    nombreError.textContent = "";
    rutError.textContent = ""; 
    emailError.textContent = "";// Borra mensajes de error cuando ya no son necesarios

    // Validar el campo nombre y RUT
    if (nombre.value === null || nombre.value.trim() === "") {
        nombreError.textContent = "Este campo es obligatorio, por favor completar";
    }

    if (rut.value === null || rut.value.trim() === "") {
        rutError.textContent = "Este campo es obligatorio, por favor completar";
    } else if (!validarRut(rut)) { // Corregido para que se pase solo rut a la función validarRut
        rutError.textContent = "El formato del RUT es incorrecto. Debe ser XXXXXXXX-Y";
    }

    if (email.value === null || email.value.trim() === ""){
        emailError.textContent = "Este campo es obligatorio, por favor completar";
    }

    // Si no hay errores enviar el formulario
    if (nombreError.textContent === "" && rutError.textContent === "" && generoError.textContent === "" && emailError.textContent === "") {
        // Enviar formulario
        alert("Mensaje enviado");
    }
};
