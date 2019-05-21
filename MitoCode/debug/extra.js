let mensaje = "Debugeando ando!"

function saludar(){
    debugger;
    console.log(mensaje);
}

module.exports = {
    saludar: saludar
}