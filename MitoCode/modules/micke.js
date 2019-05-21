//console.log('Solo es una prueba de import');

let subscriptors = 22000;


/*function saludar() {
    console.log('Hola que hace');
    
}

module.exports.saludar = saludar;
module.exports.subscriptors = subscriptors;*/

module.exports = {
    subscriptors: subscriptors,
    saludar: () => {
        console.log('Hola que hace');
    },
    /*sumar: (a, b) =>{
        return a + b;
    }*/
    sumar: (a,b) => a+b,
    mostrar: a => a+10
}