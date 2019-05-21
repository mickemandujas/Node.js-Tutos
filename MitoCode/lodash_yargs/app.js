const _ = require('lodash');
const argv = require('yargs').argv;

//let comando = process.argv[2];
//console.log(argv);

/*if(comando === 'usuario'){
    if(process.argv[3] === "MickeMandujas"){

        let x = { "nombre": "Miguel"};
        let y = { "apodo": "mickemandu"};
        let z = [
            { nombre: "Miguel", apellido: "Mandujano", edad: 25},
            { nombre: "Angel", apellido: "Diaz", edad: 25},
        ];
        /*let res = _.assign(x,y);
        console.log(res);
        
        _.times(3, ()=> console.log('Holi'));
        
        let res = _.find(z, {nombre: "Miguel", apellido: "Mandujano"});
        console.log(res);
    }else{
        console.log('Usuario no valido');
        
    }
}*/

if(argv.usuario === 'mickemandujas'){
    let x = { "nombre": "Miguel"};
    let y = { "apodo": "mickemandu"};
    let z = [
        { nombre: "Miguel", apellido: "Mandujano", edad: 25},
        { nombre: "Angel", apellido: "Diaz", edad: 25},
    ];
    /*let res = _.assign(x,y);
    console.log(res);
    
    _.times(3, ()=> console.log('Holi'));*/
    
    let res = _.find(z, {nombre: "Miguel", apellido: "Mandujano"});
    console.log(res);
}else{
    console.log('Usuario no valido');
}


