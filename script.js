const ponteiroHoras = document.querySelector('.ponteiro.horas')

const ponteiroMinutos = document.querySelector('.ponteiro.minutos')

const ponteiroSegundos = document.querySelector('.ponteiro.segundos')

const configRelogio = function () {
    const dataAtual = new Date();

    const segundos = dataAtual.getSeconds() / 60;
    const minutos = dataAtual.getMinutes() / 60;
    const horas = dataAtual.getHours() / 12;

    rotacaoPonteiros(ponteiroHoras, horas)
    rotacaoPonteiros(ponteiroMinutos, minutos)
    rotacaoPonteiros(ponteiroSegundos, segundos)
}

const rotacaoPonteiros = function (elemento, rotacao) {
    elemento.style.setProperty('--rotation', rotacao * 360)
}

configRelogio()

setInterval(configRelogio, 1000)