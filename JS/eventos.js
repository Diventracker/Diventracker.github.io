document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const sidebarToggle = document.getElementById('sidebarToggle');

    sidebarToggle.addEventListener('click', function () {
        // Alternar la clase "collapsed" para el sidebar
        sidebar.classList.toggle('collapsed'); // La clase 'collapsed' oculta el sidebar

        // Ajustar las clases del mainContent dependiendo de la visibilidad del sidebar
        if (sidebar.classList.contains('collapsed')) {
            // Si el sidebar está colapsado, hacer que el main ocupe col-12
            mainContent.classList.remove('col-10');
            mainContent.classList.add('col-12');
        } else {
            // Si el sidebar está visible, hacer que el main ocupe col-10
            mainContent.classList.remove('col-12');
            mainContent.classList.add('col-10');
        }
    });
});