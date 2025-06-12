let segundos =0;
let intervalo = null;
const display = document.getElementById("display")
const Iniciar = document.getElementById("Iniciar")
const Pausar = document.getElementById("Pausar")
const Resetar = document.getElementById("Resetar")

Iniciar.addEventListener("click",iniciarCronometro);

function iniciarCronometro(){
    if(intervalo)return;
    intervalo = setInterval(() => {
        segundos++;
        atualizaDisplay();
    
},1000);
}

Pausar.addEventListener("click",pararCronometro);
function pararCronometro(){
    clearInterval(intervalo);
    intervalo = null
}
Resetar.addEventListener("click",resetarCronometro);
function resetarCronometro(){
    pararCronometro();
    segundos =0;
    atualizaDisplay();
}
function formatarTempo(segundosTotais){
 const minutos = Math.floor(segundosTotais/60);
 const segundos = segundosTotais%60;
 return `${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`

}
function atualizaDisplay(){
    display.textContent=formatarTempo(segundos)
}