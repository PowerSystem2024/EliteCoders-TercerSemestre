function resolverNReinas() {
  const n = parseInt(document.getElementById('nInput').value);
  if (n < 8) {
    alert("Por favor, ingrese un valor de N igual o mayor a 8.");
    return;
  }

  let soluciones = [];
  let arreglo = new Array(n);

  function esSeguro(fila, col) {
    for (let i = 0; i < fila; i++) {
      if (
        arreglo[i] === col ||
        arreglo[i] - i === col - fila ||
        arreglo[i] + i === col + fila
      ) return false;
    }
    return true;
  }

  function resolver(fila) {
    if (fila === n) {
      soluciones.push([...arreglo]);
      return true;
    }
    for (let col = 0; col < n; col++) {
      if (esSeguro(fila, col)) {
        arreglo[fila] = col;
        if (resolver(fila + 1)) return true;
      }
    }
    return false;
  }

  resolver(0);
  mostrarArreglo(soluciones[0]);
  dibujarTablero(soluciones[0]);
}

function mostrarArreglo(arreglo) {
  const res = document.getElementById('resultado');
  const coordenadas = arreglo.map((col, fila) => `(${col}, ${fila})`);
  res.innerHTML = `
    <p><strong>Coordenadas de las reinas (x, y):</strong> ${coordenadas.join(', ')}</p>
    <p><strong>Arreglo (columna por fila):</strong> [${arreglo.join(', ')}]</p>
  `;
}


function dibujarTablero(arreglo) {
  const tablero = document.getElementById('tablero');
  let html = "<table>";
  for (let i = 0; i < arreglo.length; i++) {
    html += "<tr>";
    for (let j = 0; j < arreglo.length; j++) {
      let color = (i + j) % 2 === 0 ? "white" : "black";
      let contenido = (arreglo[i] === j) ? "♕" : "";
      html += `<td class="${color}">${contenido}</td>`;
    }
    html += "</tr>";
  }
  html += "</table>";
  tablero.innerHTML = html;
}
