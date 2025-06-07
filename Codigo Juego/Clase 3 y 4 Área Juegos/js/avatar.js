// Inicia el juego y espera que el jugador seleccione su personaje
let ataqueJugador;
let ataqueEnemigo;

function  iniciarJuego(){
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click',seleccionarPersonajeJugador);
    let botonPunio = document.getElementById("boton-punio");
    botonPunio.addEventListener('click', ataquePunio);
    let botonPatada = document.getElementById("boton-patada");
    botonPatada.addEventListener('click', ataquePatada);
    let botonBarrida = document.getElementById("boton-barrida");
    botonBarrida.addEventListener('click', ataqueBarrida);
    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
}

// El enemigo elige aleatoriamente uno de los cuatro personajes
function seleccionarPersonajeEnemigo() {
    const personajes = ['zuko', 'katara', 'aang', 'toph'];
    const personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    const spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    spanPersonajeEnemigo.innerHTML = personajeAleatorio;
    alert(`El enemigo selecciono al personaje ${personajeAleatorio} tiene 3 vidas`);
}

// Verifica qué personaje fue seleccionado por el jugador y muestra un mensaje
function seleccionarPersonajeJugador(){
    
    let inputZuko = document.getElementById('zuko')
    let inputKatara = document.getElementById('katara')
    let inputAang = document.getElementById('aang')
    let inputToph = document.getElementById('toph')
    let spanPersonajeJugador = document.getElementById('personaje-jugador')

   if(inputZuko.checked){
    spanPersonajeJugador.innerHTML= 'zuko' 

    }else if(inputKatara.checked){

    spanPersonajeJugador.innerHTML='katara'
    }else if(inputKatara.checked){

    spanPersonajeJugador.innerHTML='aang'
    }else if(inputKatara.checked){

    spanPersonajeJugador.innerHTML='toph'
    }else{
    alert('Selecciona un personaje')
    }

    
    
    let personajeSeleccionado = document.querySelector('input[name="personaje"]:checked')?.value
    if (!personajeSeleccionado) {
        alert('No seleccionaste ningún personaje');
        return;
    }
    alert(`Seleccionaste al personaje ${personajeSeleccionado}`);
    // Mostrar mensaje con las 3 vidas del personaje jugador
    alert(`Tu personaje ${personajeSeleccionado} tiene 3 vidas`);

    // Mostrar el personaje que eligió el enemigo
    seleccionarPersonajeEnemigo();    
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = numeroRandom(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Punio";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Patada";
    } else {
        ataqueEnemigo = "Barrida";
    }

    alert(`El enemigo ataco con ${ataqueEnemigo}`);
}

function ataquePunio(){
    ataqueJugador = "Punio";
    alert(ataqueJugador);
    ataqueAleatorioEnemigo();
}

function ataquePatada(){
    ataqueJugador = "Patada";
    alert(ataqueJugador);
    ataqueAleatorioEnemigo();
}

function ataqueBarrida(){
    ataqueJugador = "Barrida";
    alert(ataqueJugador);
    ataqueAleatorioEnemigo();
}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener('load', iniciarJuego)
