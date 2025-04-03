/**
 * SCRIPT DE REGISTRO DE USUARIO
 * Maneja el registro de usuarios y redirección a productos
 * Versión compatible con el sistema de login
 */

document.addEventListener('DOMContentLoaded', function() {
    const formularioRegistro = document.getElementById('formulario-registro');
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const emailInput = document.getElementById('email');
    const contrasenaInput = document.getElementById('contrasena');
    const rContrasenaInput = document.getElementById('r-contraseña');
    const terminosCheckbox = document.getElementById('terminosCondiciones');
    
    formularioRegistro.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = nombreInput.value.trim();
        const apellidos = apellidosInput.value.trim();
        const email = emailInput.value.trim();
        const contrasena = contrasenaInput.value;
        const rContrasena = rContrasenaInput.value;
        const aceptaTerminos = terminosCheckbox.checked;
        
        // Validaciones básicas
        if (!nombre || !apellidos || !email || !contrasena || !rContrasena) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, introduce un email válido.');
            return;
        }
        
        if (contrasena !== rContrasena) {
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
            return;
        }
        
        if (!aceptaTerminos) {
            alert('Debes aceptar los términos y condiciones para registrarte.');
            return;
        }
        
        try {
            // Almacenar los datos del usuario
            const usuario = {
                nombre: nombre,
                apellidos: apellidos,
                email: email,
                contrasena: contrasena,
                telefono: document.getElementById('telefono').value.trim(),
                mantenerSesion: document.getElementById('mantenerSesion').checked
            };
            
            // Guardar en localStorage
            localStorage.setItem('usuario', JSON.stringify(usuario));
            
            alert('Registro exitoso. Redirigiendo a la página principal...');
            
            // Verificar si la página existe antes de redirigir
            const rutaBase = '../POLITICAS/BASE/basepagina.html';
            
            fetch(rutaBase, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        window.location.href = rutaBase;
                    } else {
                        throw new Error('Página no encontrada');
                    }
                })
                .catch(error => {
                    console.error('Error al verificar la página:', error);
                    alert('Error: No se pudo acceder a la página de destino. Serás redirigido a la página principal.');
                    window.location.href = 'index.html';
                });
            
        } catch (error) {
            console.error('Error en el registro:', error);
            alert('Error al registrar. Por favor, inténtalo de nuevo.');
        }
    });
});