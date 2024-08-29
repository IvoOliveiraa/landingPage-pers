// taggLe icon navbar
let menuIcon = document.querySelector('#hbg');
let navbar = document.querySelector('nav');
let links = document.querySelectorAll('nav a'); // Seleciona todos os links dentro do menu

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('ativar');
}

// Adicione um evento de clique para cada link
links.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bi-x');
        navbar.classList.remove('ativar');
    });
});
