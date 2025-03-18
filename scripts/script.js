// Variáveis de controle
let lastScrollPosition = 0; // Armazena a última posição do scroll
let isScrolling = false; // Controla se o usuário está rolando ou não

// Função para atualizar a posição da teia e da imagem com base no scroll
function updateScroll() {
    const teia = document.querySelector('.teia'); // Seleciona o elemento da teia
    const milesCabecaBaixo = document.querySelector('.miles-de-cabeca-para-baixo'); // Seleciona a imagem do Miles Morales
    const scrollPosition = window.scrollY; // Obtém a posição atual do scroll

    // Define o ponto de parada da imagem (metade da altura da janela)
    const stopPoint = window.innerHeight / 2;

    // Move a imagem do Miles Morales para baixo até o ponto de parada
    if (scrollPosition <= stopPoint) {
        // Atualiza o comprimento da teia de acordo com a rolagem
        teia.style.height = `${scrollPosition}px`;
        milesCabecaBaixo.style.top = `${scrollPosition}px`;
    } else {
        // Quando atinge o ponto de parada, fixa a imagem e a teia
        milesCabecaBaixo.style.top = `${stopPoint}px`;
        teia.style.height = `${stopPoint}px`;
    }

    // Se o usuário ainda está rolando, continua o loop de animação
    if (isScrolling) {
        requestAnimationFrame(updateScroll); // Chama a função novamente para continuar a animação
    }
}

// Detecta quando o usuário começa a rolar
window.addEventListener('scroll', function() {
    if (!isScrolling) {
        isScrolling = true; // Marca que o usuário começou a rolar
        requestAnimationFrame(updateScroll); // Inicia a animação de rolagem
    }
    lastScrollPosition = window.scrollY; // Atualiza a posição do scroll
});

// Detecta quando o usuário para de rolar
window.addEventListener('scroll', function() {
    clearTimeout(window.scrollEndTimer); // Limpa o temporizador anterior
    window.scrollEndTimer = setTimeout(function() {
        isScrolling = false; // Marca que o usuário parou de rolar
    }, 100); // Define um pequeno intervalo para detectar o fim da rolagem (ajustável)
});

// Função para gerar estrelas dinamicamente na tela
function generateStars(numStars) {
    const starsContainer = document.querySelector('.stars'); // Seleciona o contêiner onde as estrelas serão colocadas
    const starTypes = ['star-small', 'star-medium', 'star-large']; // Tipos de tamanhos de estrelas

    // Gera as estrelas
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div'); // Cria um novo elemento div para a estrela
        const sizeClass = starTypes[Math.floor(Math.random() * starTypes.length)]; // Escolhe aleatoriamente o tipo de estrela
        const topPosition = Math.random() * 100; // Gera uma posição aleatória para o topo (0 a 100%)
        const leftPosition = Math.random() * 100; // Gera uma posição aleatória para a esquerda (0 a 100%)

        // Adiciona as classes e estilos à estrela criada
        star.classList.add('star', sizeClass); // Adiciona as classes para o estilo
        star.style.top = `${topPosition}%`; // Define a posição vertical
        star.style.left = `${leftPosition}%`; // Define a posição horizontal

        // Adiciona a estrela ao contêiner de estrelas
        starsContainer.appendChild(star);
    }
}

// Chama a função para gerar, por exemplo, 100 estrelas
generateStars(250); // Gera 100 estrelas aleatórias na tela

document.getElementById("janela1").addEventListener("click", function() {
    let hulkGif = document.getElementById("hulkGif");

    if (!hulkGif) {
        hulkGif = document.createElement("img");
        hulkGif.id = "hulkGif";
        hulkGif.src = "./images/hulk-gif.gif"; // Substitua pelo caminho correto
        document.body.appendChild(hulkGif);
    }

    hulkGif.style.display = "block";

    // Opcional: Ocultar após alguns segundos
    setTimeout(() => {
        hulkGif.style.display = "none";
    }, 5000); // 5 segundos
});