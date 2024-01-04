let conteudo = true;

const menuPrincipal = document.querySelector('.principal');
const menuToggle = menuPrincipal.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function () {
    menuPrincipal.classList.toggle('on', conteudo);
    conteudo = !conteudo; 
});

