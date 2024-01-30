const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

const quatidadeDeCapitulos = 10;
let taTocando = false;
let capitulo = 1;

function tocarFaixa() {
    audio.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    taTocando = true;
}
function pausarFaixa() {
    audio.pause();
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    taTocando = false;
}
function tocarOuPausarFaixa() {
    if (taTocando === true) {
        pausarFaixa();
    }
    else {
        tocarFaixa();
    }
}
function capituloAnterior() {
    if (capitulo === 1) {
        capitulo = quatidadeDeCapitulos;
    } else {
        capitulo -= 1;
    }
    audio.src = "./books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo" + capitulo;
    tocarFaixa();
}
function proximoCapitulo() {
    if (capitulo < quatidadeDeCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    audio.src = "./books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}
botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);

