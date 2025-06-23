let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;
    if(expresion){
        resolver('Resolvio correctamente')
    }
    else{
        resolver('Se produjo un error')
    }
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);


//miPromesa
//    .then(valor => console.log(valor))
//    .catch(error => console.log(error));


let promesa= new Promise((Resolver)=>{
    //console.log('inicio promesa')
    setTimeout(() => Resolver('Saludos desde promesa, callback, funcion flecha y setTimeout'),3000);
    //console.log('final promesa')
});

// el llamado a la promesa usando setTimeout
//promesa.then(valor => console.log(valor));




// async indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesas y asinc';

}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/ await
async function FuncionConPromesaYAwait(){
    let miPromesa= new Promise(resolver=> {
        resolver('Promesa con await');

    });
    console.log(await miPromesa);
}

//FuncionConPromesaYAwait();

// Promesa,await,async y setTimeout
async function FuncionConPromesaAwaitTimeout(){
    let miPromesa= new Promise(resolver => {
        console.log('inicio promesa')
        setTimeout(() => resolver ('Promesa con await y timeout'), 3000);
        console.log('final promesa')
    });
    console.log(await miPromesa);
}

// Llamamos a la funcion
FuncionConPromesaAwaitTimeout();







