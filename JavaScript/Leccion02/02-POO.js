class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles() {
        return `Empleado: ${this._nombre}, Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    //Agregamos la sobreescritura
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()} depto:${this._departamento}`;
    }
}

let Gerente1 = new Gerente('Ricardo', 5000, 'Sistemas');
console.log(Gerente1); //Objeto de la clase hija

let empleado1 = new Empleado('Andres', 4000);
console.log(empleado1); //Objeto de la clase padre