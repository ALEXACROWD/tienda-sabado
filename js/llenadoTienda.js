//Arreglo de objetos

let productos = [
    {nombre: "Figura Eva01", precio: 1000000, foto: 'img/EvaFi.jpg', descripcion: "Figura del Eva 01 de la batlla contra el Eva 04"},
    {nombre: "Asuka Langley",precio: 144000, foto: 'img/aska.jpg', descripcion: "Figura Asuka Vestido Verano"},
    {nombre: "CamisetaEva01", precio: 80000, foto: 'img/Cami.jpg', descripcion: "Camiseta negra Eva01"},
    {nombre: "Figura Eva00", precio: 1000000, foto: 'img/Eva00.jpg', descripcion: "Figura del Eva 00"},
    {nombre: "Figura Eva02", precio: 1000000, foto: 'img/Eva02.jpg', descripcion: "Figura del Eva 02"},
    {nombre: "Figura Eva05", precio: 1000000, foto: 'img/Eva05.jpg', descripcion: "Figura del Eva 05"},
    {nombre: "Funda Switch Eva01", precio: 1000000, foto: 'img/Funda.jpg', descripcion: "Funda para Nintendo Switch con imagen del Eva 01"},
    {nombre: "Kaworu", precio: 1000000, foto: 'img/Kaworu.jpg', descripcion: "Figura de kaworu, piloto del Eva 04"},
    {nombre: "Lilith", precio: 1000000, foto: 'img/Lilith.jpg', descripcion: "Figura de Lilith con accesorios"},
    {nombre: "Mari", precio: 1000000, foto: 'img/Mari.jpg', descripcion: "Figura de Mari, piloto del Eva 05"},
    {nombre: "Pad", precio: 1000000, foto: 'img/Pad.jpg', descripcion: "Pad Mouse y teclado con imagen de Rei"},
    {nombre: "Rei Ayanami", precio: 1000000, foto: 'img/Rei.jpg', descripcion: "Figura de Rei Ayanami, piloto del Eva 00"},
    {nombre: "Sinji Ikari", precio: 1000000, foto: 'img/Shinji.jpg', descripcion: "Figura de Shinji Ikari, piloto del Eva 01"},
    {nombre: "Reloj", precio: 1000000, foto: 'img/watch.jpg', descripcion: "Reloj analógico negro, con Colores y fondo del Eva01"}
]

//Recorriendo un arreglo con js: Buscar, seleccionar...
//cuando una función no tiene nombre, se llama 'funcion anonima' y solo se ejecuta una vez

productos.forEach(function(producto){
    console.log("holi")
})

//Escuchando clic en el botón

let boton = document.getElementById("boton")

//Detectando un evento

boton.addEventListener("click", cambiarFoto())

//Creando una funcion

function cambiarFoto()
{
    console.log("Ha hecho clic en el botón")
}

