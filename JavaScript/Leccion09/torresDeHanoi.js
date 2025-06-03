let movimientos = [];
let delay = 500;

function resolverTorresDeHanoi() {
  const n = parseInt(document.getElementById('nInput').value);
  if (n < 2) {
    alert("Por favor, ingrese un valor de N igual o mayor a 2.");
    return;
  } else if (n > 7) {
    if (!confirm("El valor de N es muy alto y puedegenerar mucho gasto de memoria, ¿estás seguro de continuar?")) {
      return;
    }
  }

  ['A', 'B', 'C'].forEach(id => document.getElementById(id).innerHTML = '');

  for (let i = n; i >= 1; i--) {
    const disk = document.createElement('div');
    disk.className = 'disk';
    disk.dataset.size = i;
    disk.style.width = `${i * 25 + 30}px`;
    disk.style.backgroundColor = `hsl(${i * 30}, 70%, 50%)`;
    disk.textContent = `Disco ${i}`;
    document.getElementById('A').appendChild(disk);
  }

  movimientos = [];
  moverDiscos(n, 'A', 'C', 'B');
  ejecutarMovimientos();
}

function moverDiscos(n, origen, destino, auxiliar) {
  if (n === 1) {
    movimientos.push({ from: origen, to: destino });
  } else {
    moverDiscos(n - 1, origen, auxiliar, destino);
    movimientos.push({ from: origen, to: destino });
    moverDiscos(n - 1, auxiliar, destino, origen);
  }
}

function ejecutarMovimientos() {
  if (movimientos.length === 0) return;

  let i = 0;

  function moverPaso() {
    const mov = movimientos[i];
    const fromTorre = document.getElementById(mov.from);
    const toTorre = document.getElementById(mov.to);

    const disco = fromTorre.lastElementChild;
    if (disco) {
      toTorre.appendChild(disco);
    }

    i++;
    if (i < movimientos.length) {
      setTimeout(moverPaso, delay);
    }
  }

  setTimeout(moverPaso, delay);
}