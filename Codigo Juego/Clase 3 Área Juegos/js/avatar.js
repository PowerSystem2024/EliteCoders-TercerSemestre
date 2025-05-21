function seleccionarPersonajeJugador(){
    let personajeSeleccionado = document.querySelector('input[name="personaje"]:checked')?.value
    if (!personajeSeleccionado) {
        alert('No seleccionaste ningún personaje');
        return;
    }
    alert(`Seleccionaste al personaje ${personajeSeleccionado}`);
}

let botonPersonajeJugador = document.getElementById('boton-personaje');
botonPersonajeJugador.addEventListener('click',seleccionarPersonajeJugador);