const form = document.getElementById('formulariobasico');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    let messages = [];

    if (nombre.length < 5 || nombre.length > 30) {
        messages.push('El nombre debe tener entre 5 y 30 caracteres');
    }

    if (telefono.length < 4 || telefono.length > 20) {
        messages.push('El número de teléfono debe tener entre 4 y 20 caracteres');
    }

    if (!email.includes('@')) {
        messages.push('El email debe contener el carácter "@"');
    }

    if (messages.length > 0) {
        alert(messages.join('\n'));
    } else {
        alert('Formulario enviado correctamente');
        form.reset();
    }
});
