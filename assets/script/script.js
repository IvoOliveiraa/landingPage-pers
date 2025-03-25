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


//getAllCards
const getAllCards = async() =>{
    try{
        const res = await fetch('produtos.json');
        const data = await res.json();

        const cards = document.querySelector(".cards");

        cards.innerHTML = data.map(card => `

            <div class="card">
                <figure>
                    <img src="${card.imagem}" alt="${card.alt}" title="${card.title}">
                </figure>
                <figcaption>${card.figcaption}</figcaption>
            </div>
        
        `).join("");
        
    }catch(err){
        throw new Error('erro ao carregar card' + err);
    }
}

getAllCards()