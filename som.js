// Obtém os elementos HTML do áudio e da imagem
const musicaDeFundo = document.getElementById('musicaDeFundo');
const iconeSom = document.getElementById('iconeSom');

// Define os caminhos das imagens
// (O ícone "com som")
const imagemSomLigado = 'https://icones.pro/wp-content/uploads/2022/02/icone-du-son-et-du-haut-parleur-jaune.png';
// (O ícone "sem som")
const imagemSomDesligado = 'https://icones.pro/wp-content/uploads/2021/07/icone-de-haut-parleur-muet-jaune.png';

let isPlaying = true; // A música começa tocando, então o estado inicial é 'true'

// Toca a música assim que o script é carregado
musicaDeFundo.play();

iconeSom.addEventListener('click', () => {
    // Se a música estiver tocando...
    if (isPlaying) {
        musicaDeFundo.pause(); // Pausa a música
        iconeSom.src = imagemSomDesligado; // Troca a imagem para o ícone de "som desligado"
        isPlaying = false; // Atualiza o estado
    } else {
        // Se a música estiver pausada...
        musicaDeFundo.play(); // Toca a música
        iconeSom.src = imagemSomLigado; // Troca a imagem para o ícone de "som ligado" (mutado)
        isPlaying = true; // Atualiza o estado
    }
});
