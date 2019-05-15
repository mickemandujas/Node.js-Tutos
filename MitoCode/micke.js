console.log('Solo es una prueba de import');

let subscriptors = 22000;


/*function saludar() {
    console.log('Hola que hace');
    
}

module.exports.saludar = saludar;
module.exports.subscriptors = subscriptors;*/

module.exports = {
    subscriptors: subscriptors,
    saludar: function saludar() {
        console.log('Hola que hace');
        
    }
}