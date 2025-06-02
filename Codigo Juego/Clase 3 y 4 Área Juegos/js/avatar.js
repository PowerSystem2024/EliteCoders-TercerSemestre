// Inicia el juego y espera que el jugador seleccione su personaje
function  iniciarJuego(){
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click',seleccionarPersonajeJugador);
}

// El enemigo elige aleatoriamente uno de los cuatro personajes
function seleccionarPersonajeEnemigo() {
    const personajes = ['zuko', 'katara', 'aang', 'toph'];
    const personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    const spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    spanPersonajeEnemigo.innerHTML = personajeAleatorio;
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

    // Mostrar el personaje que eligió el enemigo
    seleccionarPersonajeEnemigo();

    // Mostrar mensaje con las 3 vidas del personaje jugador
    alert(`Tu personaje ${personajeSeleccionado} tiene 3 vidas`);
}



window.addEventListener('load', iniciarJuego)
