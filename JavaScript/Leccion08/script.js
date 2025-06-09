// Dimensiones del tablero
const N = 8;
const TAMANO_CASILLA = 400 / N;
const RETRASO_ANIMACION = 100; // Retraso en ms entre movimientos

// Variables globales
let tableroSolucion = null;
let secuenciaMovimientos = null;
let animacionEnCurso = false;

// Carga la imagen del caballo
const iconoCaballo = new Image();
iconoCaballo.src = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg';

// Función para verificar si la posición (x, y) es válida y no visitada
function esSeguro(x, y, tablero) {
    return x >= 0 && x < N && y >= 0 && y < N && tablero[x][y] === -1;
}

// Función para obtener los movimientos válidos desde la posición (x, y)
function obtenerMovimientosValidos(x, y, tablero) {
    const movimientos = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
    const movimientosValidos = [];
    for (const [dx, dy] of movimientos) {
        const siguienteX = x + dx;
        const siguienteY = y + dy;
        if (esSeguro(siguienteX, siguienteY, tablero)) {
            movimientosValidos.push([siguienteX, siguienteY]);
        }
    }
    return movimientosValidos;
}

function recorridoCaballo(filaInicial, columnaInicial) {
    const tablero = Array.from({ length: N }, () => Array(N).fill(-1));
    const secuencia = [];

    // Heurística de Warnsdorff: elegir el siguiente con menos accesos
    function contarAccesos(x, y, tablero) {
        return obtenerMovimientosValidos(x, y, tablero).length;
    }

    function resolver(x, y, paso) {
        tablero[x][y] = paso;
        secuencia.push([x, y]);

        if (paso === N * N - 1) return true;

        const movimientos = obtenerMovimientosValidos(x, y, tablero);
        movimientos.sort((a, b) => contarAccesos(a[0], a[1], tablero) - contarAccesos(b[0], b[1], tablero));

        for (const [nx, ny] of movimientos) {
            if (resolver(nx, ny, paso + 1)) return true;
        }

        // backtrack
        tablero[x][y] = -1;
        secuencia.pop();
        return false;
    }

    if (resolver(filaInicial, columnaInicial, 0)) {
        return { tablero, secuencia };
    } else {
        return null;
    }
}

// Función para mostrar la matriz
function mostrarMatriz(tablero) {
    let output = '';
    for (let i = 0; i < N; i++) {
        output += tablero[i].map(x => x.toString().padStart(2, ' ')).join(' ') + '\n';
    }
    document.getElementById('matrix-display').textContent = output;
}

// Función para mostrar los pasos
function mostrarPasos(secuencia, tablero) {
    const stepsContainer = document.getElementById('steps-display');
    stepsContainer.innerHTML = '';
    
    secuencia.forEach((paso, indice) => {
        const [fila, columna] = paso;
        const numeroMovimiento = tablero[fila][columna];
        const columnaLetra = String.fromCharCode(65 + columna);
        const filaNumero = fila + 1;
        
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step-item';
        stepDiv.id = `step-${indice}`;
        stepDiv.textContent = `${numeroMovimiento.toString().padStart(2, ' ')}: ${columnaLetra}${filaNumero} (${fila},${columna})`;
        
        stepsContainer.appendChild(stepDiv);
    });
}

// Función para actualizar el paso actual
function actualizarPasoActual(indice) {
    // Quitar highlight anterior
    const pasoAnterior = document.querySelector('.current-step');
    if (pasoAnterior) {
        pasoAnterior.classList.remove('current-step');
    }
    
    // Agregar highlight al paso actual
    const pasoActual = document.getElementById(`step-${indice}`);
    if (pasoActual) {
        pasoActual.classList.add('current-step');
        pasoActual.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Función para dibujar el tablero base
function dibujarTableroBase(ctx) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            ctx.fillStyle = (i + j) % 2 === 0 ? '#f0d9b5' : '#b58863';
            ctx.fillRect(j * TAMANO_CASILLA, i * TAMANO_CASILLA, TAMANO_CASILLA, TAMANO_CASILLA);
        }
    }
}

// Función para dibujar un movimiento
function dibujarMovimiento(ctx, x, y, numero, previoX, previoY) {
    // Redibuja la casilla
    ctx.fillStyle = (x + y) % 2 === 0 ? '#f0d9b5' : '#b58863';
    ctx.fillRect(y * TAMANO_CASILLA, x * TAMANO_CASILLA, TAMANO_CASILLA, TAMANO_CASILLA);
    
    // Dibuja el número
    ctx.fillStyle = 'black';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
        numero,
        y * TAMANO_CASILLA + TAMANO_CASILLA / 2,
        x * TAMANO_CASILLA + TAMANO_CASILLA / 2
    );
    
    // Dibuja el ícono del caballo
    if (iconoCaballo.complete) {
        ctx.drawImage(
            iconoCaballo,
            y * TAMANO_CASILLA + TAMANO_CASILLA / 2,
            x * TAMANO_CASILLA + TAMANO_CASILLA / 2,
            TAMANO_CASILLA / 2,
            TAMANO_CASILLA / 2
        );
    }
    
    // Dibuja una línea al movimiento anterior
    if (previoX !== undefined && previoY !== undefined) {
        ctx.beginPath();
        ctx.moveTo(previoY * TAMANO_CASILLA + TAMANO_CASILLA / 2, previoX * TAMANO_CASILLA + TAMANO_CASILLA / 2);
        ctx.lineTo(y * TAMANO_CASILLA + TAMANO_CASILLA / 2, x * TAMANO_CASILLA + TAMANO_CASILLA / 2);
        ctx.strokeStyle = '#dc3545';
        ctx.lineWidth = 3;
        ctx.stroke();
    }
}

// Función para animar el recorrido
function animarRecorrido(tablero, secuencia) {
    const canvas = document.getElementById('chessboard');
    const ctx = canvas.getContext('2d');
    dibujarTableroBase(ctx);
    
    let indice = 0;
    animacionEnCurso = true;
    
    function pasoAnimacion() {
        if (indice < secuencia.length && animacionEnCurso) {
            const [x, y] = secuencia[indice];
            const previo = indice > 0 ? secuencia[indice - 1] : [undefined, undefined];
            
            dibujarMovimiento(ctx, x, y, tablero[x][y], previo[0], previo[1]);
            document.getElementById('contador').textContent = `Movimiento: ${tablero[x][y]}`;
            actualizarPasoActual(indice);
            
            indice++;
            
            if (indice < secuencia.length) {
                setTimeout(pasoAnimacion, RETRASO_ANIMACION);
            } else {
                animacionEnCurso = false;
                document.getElementById('start-btn').disabled = false;
                document.getElementById('status').className = 'status success';
                document.getElementById('status').textContent = '¡Recorrido completado exitosamente!';
            }
        }
    }
    pasoAnimacion();
}

// Función para iniciar el recorrido
function iniciarRecorrido() {
    if (animacionEnCurso) return;
    
    const filaInicial = parseInt(document.getElementById('start-row').value);
    const columnaInicial = parseInt(document.getElementById('start-col').value);
    
    document.getElementById('start-btn').disabled = true;
    document.getElementById('status').className = 'status warning';
    document.getElementById('status').textContent = 'Calculando recorrido...';
    
    // Pequeño delay para mostrar el mensaje
    setTimeout(() => {
        const resultado = recorridoCaballo(filaInicial, columnaInicial);
        
        if (resultado) {
            tableroSolucion = resultado.tablero;
            secuenciaMovimientos = resultado.secuencia;
            
            mostrarMatriz(tableroSolucion);
            mostrarPasos(secuenciaMovimientos, tableroSolucion);
            
            document.getElementById('status').className = 'status success';
            document.getElementById('status').textContent = 'Solución encontrada. Iniciando animación...';
            
            // Esperar a que la imagen se cargue antes de animar
            if (iconoCaballo.complete) {
                animarRecorrido(tableroSolucion, secuenciaMovimientos);
            } else {
                iconoCaballo.onload = () => animarRecorrido(tableroSolucion, secuenciaMovimientos);
            }
        } else {
            document.getElementById('status').className = 'status error';
            document.getElementById('status').textContent = 'No se encontró solución para esta posición inicial.';
            document.getElementById('matrix-display').textContent = 'No hay solución disponible.';
            document.getElementById('steps-display').textContent = 'No hay pasos disponibles.';
            document.getElementById('start-btn').disabled = false;
        }
    }, 100);
}

// Función para reiniciar
function reiniciar() {
    animacionEnCurso = false;
    tableroSolucion = null;
    secuenciaMovimientos = null;
    
    const canvas = document.getElementById('chessboard');
    const ctx = canvas.getContext('2d');
    dibujarTableroBase(ctx);
    
    document.getElementById('contador').textContent = 'Movimiento: 0';
    document.getElementById('matrix-display').textContent = 'Esperando inicio...';
    document.getElementById('steps-display').textContent = 'Esperando inicio...';
    document.getElementById('start-btn').disabled = false;
    document.getElementById('status').className = 'status warning';
    document.getElementById('status').textContent = 'Selecciona una posición inicial y presiona "Iniciar Recorrido"';
}

// Inicializar el tablero al cargar la página
window.onload = function() {
    const canvas = document.getElementById('chessboard');
    const ctx = canvas.getContext('2d');
    dibujarTableroBase(ctx);
};