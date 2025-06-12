let segundos = 0;
let milissegundos = 0;
let intervalo = null;
let MT
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', iniciarCronometro);
pauseBtn.addEventListener('click', pausarCronometro);
resetBtn.addEventListener('click', resetarCronometro);

function iniciarCronometro() {
    if (intervalo) return; // Evita iniciar múltiplos cronômetros

    intervalo = setInterval(() => {
        milissegundos += 10;
        if (milissegundos >= 1000) {
            milissegundos = 0;
            segundos++;
        }
        atualizaDisplay();
    }, 10);
}

function pausarCronometro() {
    clearInterval(intervalo);
    intervalo = null; // Reseta o intervalo
    atualizaDisplay(); // Atualiza o display para refletir a pausa
}

function resetarCronometro() {
    pausarCronometro(); // Pausa o cronômetro se estiver rodando
    segundos = 0; // Reseta os segundos
    milissegundos = 0; // Reseta os milissegundos
    atualizaDisplay(); // Atualiza o display para mostrar 00:00.000
}

function formatarTempo(segundosTotais, milissegundos) {
    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;
    const ms = Math.floor(milissegundos / 10); // Exibe apenas dois dígitos de milissegundos
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
}

function atualizaDisplay() {
    display.textContent = formatarTempo(segundos, milissegundos);
}
const cores = ['#950101','#335548','#11114E'];
let indice = 0;

document.getElementById('MT').onclick = function() {
  document.body.style.backgroundColor = cores[indice];
  indice = (indice + 1) % cores.length;
};