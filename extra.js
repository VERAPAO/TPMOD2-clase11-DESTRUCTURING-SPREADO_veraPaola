const diezNumeros = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38]

const [valorPsicionCero, , valorPosicionDos, , valorPosicionCuatro, ...restoNumeros] = diezNumeros;
const numerosRestantes = restoNumeros

const mascota = {
    nombre: "Willis",
    tipoMascota: "Perro",
    color: "Negro",
    raza: "Galgo"
}

const {nombre, tipoMascota, color, raza} = mascota;

console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoMascota}, de
color: ${color} y su raza es: ${raza}.`)

