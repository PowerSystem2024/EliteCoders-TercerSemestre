mifuncion1()
mifuncion2()

function mifuncion1(){
    console.log('Función 1');
}

function mifuncion2(){
    console.log('Función 2')
}

//Función de tipo CallBack

let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imp);


//Llamadas asincronas con uso  de la funcion setTimeout
function miFuncionCallback(){
    console.log('Saludo asincrono después de 3 segundos');
}

setTimeout(miFuncionCallback, 5000);

setTimeout(function() { console.log('Saludo asincrono 2')}, 3000);

setTimeout( () => console.log('Saludo Asincrono 3'), 4000);


//setInterval

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000) //cada 1 seg muestra ejecución