const bntPlay = document.getElementById('bntPlay');

bntPlay.addEventListener('click', function(){
    window.location.href = 'JogoCapyTela.html'
});

const imgAjuda = document.getElementById('imgAjuda');

imgAjuda.addEventListener('click', function(){
    alert("Lute e derrote os monstros \nUtilizando as teclas W,A,S,D para lutar")
});




// Obtém os elementos HTML do seu áudio e da imagem
const musicaDeFundo = document.getElementById('musicaDeFundo');
const iconeSom = document.getElementById('iconeSom');

// Define os caminhos das duas imagens
const imagemSomLigado = 'caminho/para/alto-falante.png';
const imagemSomDesligado = 'caminho/para/alto-falante-com-x.png';

let isPlaying = false; // Começa como falso, porque a música não está tocando ainda

iconeSom.addEventListener('click', () => {
  // Se a música estiver tocando...
  if (isPlaying) {
    musicaDeFundo.pause(); // Pausa a música
    iconeSom.src = imagemSomDesligado; // Troca a imagem para a com o "x"
    isPlaying = false; // Atualiza o estado da variável
  } else {
    // Se a música estiver pausada...
    musicaDeFundo.play(); // Toca a música
    iconeSom.src = imagemSomLigado; // Troca a imagem de volta para a normal
    isPlaying = true; // Atualiza o estado da variável
  }
});
