// Funcionalidad de pestañas
function openTab(tabName) {
    // Ocultar todas las pestañas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Mostrar la pestaña seleccionada
    document.getElementById(tabName).classList.add('active');
    
    // Cerrar menú móvil si está abierto
    document.getElementById('mobile-menu').classList.add('hidden');
}

// Menú
