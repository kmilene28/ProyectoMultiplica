const name = document.getElementById('nombreUno');
const telefono = document.getElementById('telefonoUno');
const email = document.getElementById('emailUno').value;
const form = document.getElementById('formulariobasico');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>{
    let messages = [];
    if (nombre.value === '' || nombre.value == null) {
        messages.push('Insertar nombre');
    }
    if (telefono.value.length <= 6) {
        messages.push('El telefono debe tener mas de 4 caracteres');
    }
    if (telefono.value.length >= 20) {
        messages.push('El telefono debe tener menos de 20 caracteres');
    }
    if (email.value === '' || email.value == null) {
        else{
            alert("Debe ingresar una direccion valida");
        }
    }
    if (messages.length > 0) {
        e.preventDefault();
    errorElement.innerText = messages.join(' , ');
    }
})
function myFunction() {
    alert("Su formulario fue enviado");
}