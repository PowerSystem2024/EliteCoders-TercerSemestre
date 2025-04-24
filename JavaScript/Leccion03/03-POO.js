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
          return `Gerente: ${super.obtenerDetalles()} 
          depto:${this._departamento}`;
      }
  }

  function imprimir( tipo ){ // recibe una variable
      console.log( tipo.obtenerDetalles() ); // segun el tipo que le pasemos, sera la informacion
      if( tipo instanceof Gerente){
            console.log('Es un objeto de tipo Gerente');
            console.log( tipo._departamento );
      }
      else if( tipo instanceof Empleado){
            console.log('Es de tipo empleado');
            console.log(tipo._departamento); // no existe en la clase padre
      }
      else if( tipo instanceof Object){ // el orden siempre es jerarquico
            console.log('Es de tipo Object'); // clase padre de todas las clases
      }
  }

  let gerente1 = new Gerente('Ricardo', 5000, 'Sistemas');
  console.log(gerente1); //Objeto de la clase hija
  
  let empleado1 = new Empleado('Andres', 4000);
  console.log(empleado1); //Objeto de la clase padre

  imprimir( empleado1 ); //En el polimorfismo esta llamando al método de la clase padre
  imprimir( gerente1 ); //Esta llamando al método de la clase hija

  // son las multiples formas en tiempo de ejecución del polimorfismo 
