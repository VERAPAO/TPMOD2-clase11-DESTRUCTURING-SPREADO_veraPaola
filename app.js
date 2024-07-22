
const  importar  = require('./collectibles')

const hotToys = importar('Hot Toys');
const bandai = importar('Bandai');
const starWars = importar('Star Wars')



const unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
];

const collectibles = {
    figuras: unifiedCollectibles,
    listFigures:  function() {
        this.figuras.forEach((figura) => {
            console.log(`ID: ${figura.id}`);
            console.log(`Marca: ${figura.marca}`);
            console.log(`Nombre: ${figura.nombre}`);
            console.log(`Precio: ${figura.precio}`);
            console.log(`Stock: ${figura.stock}`);
            console.log();
        });
    },
    figuresByBrand: function(marca) {
        return this.figuras.filter((figura) => figura.marca === marca);
    }
}

console.log(collectibles.figuras)
console.log(collectibles.listFigures())
console.log(collectibles.figuresByBrand('Hot Toys'))
console.log(collectibles.figuresByBrand('Bandai'))
console.log(collectibles.figuresByBrand('Star Wars'))
