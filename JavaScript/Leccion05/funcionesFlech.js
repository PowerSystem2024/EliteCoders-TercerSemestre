


function miFuncion(){
    console.log("Saludos desde mi funcion")
}

miFuncion();

let myFuncion = function (){
    console.log("Saludos desde la funcion anonima");
}

// Ahora a crear una funcion flecha
let= miFuncionFlecha=() => {
    console.log("Saludos desde la funcion flecha");
}

// Hat mas variantes de funcion flecha
miFuncionFlecha();

// lo hacemos en una linea
const saludar =()=> console.log("Saludos desde esta funcion flecha");

saludar();

// otro ejemplo
const saludar2= ()=> {
    return ' Saludos desde la funcion flecha dos';
}

console.log(saludar2());

// simplificamos la funcion anterior
const saludar3 = () => "Saludos desde esta funcion flecha tres";
//

console.log(saludar3());

//Continuamos con otro ejem
const regresaObjeto= () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresaObjeto());

//Funciones que reciben parametros
const funcionParametros = (mensaje)=> console.log(mensaje);

funcionParametros("Saludos desde esta funcion con parametros") ;

// una funcion clasica
const funcionParametrosClasica =function(mensaje){
    console.log(mensaje);
}
funcionParametrosClasica("Saludos desde esta funcion clasica");

//Se puede omitir los paraentecis en estas funciones
const funcionConParametros= mensaje=> console.log(mensaje);

funcionConParametros("otra forma de trabajar con la funcion flecha");

// Funcion flecha con varios parametros
// Podemos abrir la funcion y tener mas cosas dentro de ella
const funcionConParametros2= (op1, op2) => {
    let resultado = op1 + op2;
    return resultado
}
console.log(funcionConParametros2(3,5));
//
//
