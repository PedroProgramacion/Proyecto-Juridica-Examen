document.addEventListener('DOMContentLoaded', function() {
    // Versión debug: verifica que el script se carga
    console.log("El script se cargó correctamente");
    
    // 1. Botón Privacidad 1 (Corte Inglés)
    const btnPrivacidad1 = document.getElementById('btn-privacidad1');
    if (btnPrivacidad1) {
        console.log("Botón privacidad 1 encontrado");
        btnPrivacidad1.addEventListener('click', function() {
            console.log("Redirigiendo a política de privacidad 1...");
            window.location.href = '../../POLITICAS/POLITICAS PRIVACIDAD/politica1.html';
        });
    } else {
        console.error("No se encontró el botón Privacidad 1");
    }

    // 2. Botón Privacidad 2 (Amazon)
    const btnPrivacidad2 = document.getElementById('btn-privacidad2');
    if (btnPrivacidad2) {
        console.log("Botón privacidad 2 encontrado");
        btnPrivacidad2.addEventListener('click', function() {
            console.log("Redirigiendo a política de privacidad 2...");
            window.location.href = '../../POLITICAS/POLITICAS PRIVACIDAD/politica2.html';
        });
    } else {
        console.error("No se encontró el botón Privacidad 2");
    }
    
    // 3. Botón Privacidad 3 (Wallapop)
    const btnPrivacidad3 = document.getElementById('btn-privacidad3');
    if (btnPrivacidad3) {
        console.log("Botón privacidad 3 encontrado");
        btnPrivacidad3.addEventListener('click', function() {
            console.log("Redirigiendo a política de privacidad 3...");
            window.location.href = '../../POLITICAS/POLITICAS PRIVACIDAD/politica3.html';
        });
    } else {
        console.error("No se encontró el botón Privacidad 3");
    }

    // 4. Funcionalidad de búsqueda
    const searchButton = document.getElementById('search-button');
    const productSearch = document.getElementById('politic-search');
    if (searchButton && productSearch) {
        searchButton.addEventListener('click', function() {
            const searchTerm = productSearch.value.trim();
            if (searchTerm) {
                alert(`Buscando: "${searchTerm}"`);
                
            }
        });
        
        // Opcional: Permitir búsqueda al presionar Enter
        productSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
});