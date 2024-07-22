

const fs = require('fs');
const path = require('path');

const generarListaArchivos = (archivo) => {
    const rutaArchivo = path.join(__dirname, 'datos', archivo);
    const archivoLeido = fs.readFileSync(rutaArchivo, 'utf-8');
    return JSON.parse(archivoLeido);
};

const listaDeArchivos = [
    ...generarListaArchivos('figuras1.json'),
    ...generarListaArchivos('figuras2.json'),
    ...generarListaArchivos('figuras3.json')
];

//console.log(listaDeArchivos)

const importar = (marca) => {
    const datos = [];

    listaDeArchivos.forEach((figura) => {
      
            if (figura.marca === marca) {
                datos.push(figura);
            }
       
    });

    return datos;
};


module.exports =  importar ;

