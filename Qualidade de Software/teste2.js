const imagensContainer = document.querySelector('.imagens');

// Seleciona todas as imagens dentro do contêiner '.imagens'
const imagens = document.querySelectorAll('.imagens img');

// Seleciona os botões de navegação "anterior" e "próximo"
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Variável que controla o índice da imagem atual
let indiceatual = 0;

// Função para atualizar o carrossel, movendo o contêiner de imagens
function atualizarcarrosel() {
  // Calcula o desvio para mover as imagens para a posição correta
  const desvio = -indiceatual * 600; // 600px é a largura de cada imagem
  imagensContainer.style.transform = `translateX(${desvio}px)`; // Aplica o desvio ao contêiner das imagens
}

// Adiciona o evento de clique no botão "anterior" (prev)
prevButton.addEventListener('click', () => {
  // Atualiza o índice da imagem atual para a anterior, ou volta para a última imagem se estiver na primeira
  indiceatual = (indiceatual - 1 + imagens.length) % imagens.length; 
  atualizarcarrosel(); // Atualiza o carrossel para mostrar a nova imagem
});

// Adiciona o evento de clique no botão "próximo" (next)
nextButton.addEventListener('click', () => {
  // Atualiza o índice da imagem atual para a próxima, ou volta para a primeira imagem se estiver na última
  indiceatual = (indiceatual + 1) % imagens.length; 
  atualizarcarrosel(); // Atualiza o carrossel para mostrar a nova imagem
});
