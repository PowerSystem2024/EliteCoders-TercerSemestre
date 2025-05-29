// Creo en una funcion con un parametro maximo y minimo a asignar y devuelve un numero random
let jugador = 0;
let pc = numeroRandom(1, 3);
let jugadorPuntos = 0;
let pcPuntos = 0;

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function esGanador(entradaUsuario, pc) {
    const combinacionesParaGanar = new Map([
        [1, 3],
        [2, 1],
        [3, 2]
    ]);
    return combinacionesParaGanar.get(entradaUsuario) === pc;
}

function mostrarOpcion(eleccion, usuario) {
    switch (eleccion) {
        case 1:
            alert(`Usuario: ${usuario} Elegio piedra`);
            break;
        case 2:
            alert(`Usuario: ${usuario} Elegio papel`);
            break;
        case 3:
            alert(`Usuario: ${usuario} Elegio tijeras`);
            break;
    }
}

function condicion(jugador, pc){
    
    document.getElementById("eleccion").textContent = `Jugador: ${jugador} - PC: ${pc}`;
    document.getElementById("resultado").textContent = `Jugador: ${jugadorPuntos} - PC: ${pcPuntos}`;
    if(jugadorPuntos === 3 || pcPuntos === 3){
        alert(`El juego ha terminado, el ganador es ${jugadorPuntos === 3 ? "Jugador" : "PC"}`);
        reiniciarJuego()
    }
    
}
function juego(jugador) {
    pc = numeroRandom(1, 3);
    mostrarOpcion(pc, "PC");
    mostrarOpcion(jugador, "Jugador");
    
    
    if (pc === jugador) {
        alert("¡Empate!");
    } else if (esGanador(jugador, pc)) {
        alert("GANASTE!");
        jugadorPuntos++;
    } else {
        alert("PERDISTE!");
        pcPuntos++;
    }
    condicion(jugador, pc);
    

}

function reiniciarJuego() {
    jugadorPuntos = 0;
    pcPuntos = 0;
    document.getElementById("eleccion").textContent = "";
    document.getElementById("resultado").textContent = "";
}


