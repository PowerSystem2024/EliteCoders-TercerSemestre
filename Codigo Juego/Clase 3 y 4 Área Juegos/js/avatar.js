let ataqueJugador;
let ataqueEnemigo;
// Variables para las vidas del jugador y del enemigo, usadas como variables globales
// para mejorar la logica
let vidasJugador = 3;
let vidasEnemigo = 3;
let reglasVisibles = false;

function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    document.getElementById('reglas-del-juego').style.display = 'none';

    document.getElementById('seleccionar-ataque').style.display = 'none';
    document.getElementById('boton-personaje').disabled = false;
    document.getElementById('boton-reglas').addEventListener('click', mostrarReglas);
    document.getElementById('boton-jugar').addEventListener('click', seleccionarPersonajeJugador);

    let botonPunio = document.getElementById("boton-punio");
    botonPunio.addEventListener('click', ataquePunio);
    let botonPatada = document.getElementById("boton-patada");
    botonPatada.addEventListener('click', ataquePatada);
    let botonBarrida = document.getElementById("boton-barrida");
    botonBarrida.addEventListener('click', ataqueBarrida);
    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
}

function mostrarReglas() {
    if (reglasVisibles) {
        document.getElementById('reglas-del-juego').style.display = 'none';
        reglasVisibles = false;
    } else {
        document.getElementById('reglas-del-juego').style.display = 'block';
        reglasVisibles = true;
    }
}

function seleccionarPersonajeJugador() {
    document.getElementById('reglas-del-juego').style.display = 'none';

    let personajeSeleccionado = document.querySelector('input[name="personaje"]:checked')?.value;
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

    if (!personajeSeleccionado) {
        alert('Selecciona un personaje');
        return;
    }

    spanPersonajeJugador.innerHTML = personajeSeleccionado;
    document.getElementById('mensajes').innerHTML = `<p>Seleccionaste al personaje ${personajeSeleccionado}</p>`;
    seleccionarPersonajeEnemigo();
    document.getElementById('boton-personaje').disabled = true;
    document.getElementById('boton-jugar').disabled = true;
    document.getElementById('boton-reiniciar').disabled = false;
    document.getElementById('boton-punio').disabled = false;
    document.getElementById('boton-patada').disabled = false;
    document.getElementById('boton-barrida').disabled = false;
    document.getElementById('seleccionar-ataque').style.display = '';
    document.getElementById('seleccionar-personaje').style.display = 'none';
}

function seleccionarPersonajeEnemigo() {
    const personajes = ['Zuko', 'Katara', 'Aang', 'Toph'];
    const personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    const spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    spanPersonajeEnemigo.innerHTML = personajeAleatorio;
    document.getElementById('mensajes').innerHTML += `<p>El enemigo seleccionó al personaje ${personajeAleatorio}</p>`;
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = numeroRandom(1, 3);
    if (ataqueAleatorio === 1) {
        ataqueEnemigo = "Puño";
    } else if (ataqueAleatorio === 2) {
        ataqueEnemigo = "Patada";
    } else {
        ataqueEnemigo = "Barrida";
    }
}

function combatir() {
    let mensaje = '';
    if (ataqueJugador === ataqueEnemigo) {
        mensaje = '¡Empate! Ambos atacaron con ' + ataqueJugador;
    } else if (
        (ataqueJugador === 'Puño' && ataqueEnemigo === 'Barrida') ||
        (ataqueJugador === 'Patada' && ataqueEnemigo === 'Puño') ||
        (ataqueJugador === 'Barrida' && ataqueEnemigo === 'Patada')
    ) {
        vidasEnemigo--;
        mensaje = `¡Ganaste! Tu ${ataqueJugador} venció al ${ataqueEnemigo} del enemigo.`;
    } else {
        vidasJugador--;
        mensaje = `¡Perdiste! El ${ataqueEnemigo} del enemigo venció a tu ${ataqueJugador}.`;
    }

    // Actualizar el mensaje en el DOM
    document.getElementById('mensajes').innerHTML = `<p>${mensaje}</p>`;
    document.getElementById('vidas-jugador').innerHTML = vidasJugador;
    document.getElementById('vidas-enemigo').innerHTML = vidasEnemigo;

    // Actualizar las vidas del jugador y del enemigo
    if (vidasJugador <= 0 || vidasEnemigo <= 0) {
        let resultadoFinal = vidasJugador <= 0 ? '¡Perdiste el juego!' : '¡Ganaste el juego!';
        document.getElementById('mensajes').innerHTML = `<p>${resultadoFinal}</p>`;
        deshabilitarBotonesAtaque();
    }
}

function ataquePunio() {
    ataqueJugador = "Puño";
    ataqueAleatorioEnemigo();
    combatir();
}

function ataquePatada() {
    ataqueJugador = "Patada";
    ataqueAleatorioEnemigo();
    combatir();
}

function ataqueBarrida() {
    ataqueJugador = "Barrida";
    ataqueAleatorioEnemigo();
    combatir();
}

function deshabilitarBotonesAtaque() {
    document.getElementById('boton-punio').disabled = true;
    document.getElementById('boton-patada').disabled = true;
    document.getElementById('boton-barrida').disabled = true;
}

function reiniciarJuego() {
    location.reload();
    vidasJugador = 3;
    vidasEnemigo = 3;
    document.getElementById('personaje-jugador').innerHTML = '';
    document.getElementById('personaje-enemigo').innerHTML = '';
    document.getElementById('vidas-jugador').innerHTML = '3';
    document.getElementById('vidas-enemigo').innerHTML = '3';
    document.getElementById('mensajes').innerHTML = '';
    document.querySelectorAll('input[name="personaje"]').forEach(input => input.checked = false);
    document.getElementById('boton-personaje').disabled = false;
    document.getElementById('boton-jugar').disabled = false;
    deshabilitarBotonesAtaque();
}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);