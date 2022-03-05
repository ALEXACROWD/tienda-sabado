//Productos de la tienda

let nompreProducto = "Figura Eva 01 a escala"
let precioProducto = 1000000
let descripcionProducto = "Figura del Eva 01 de la batlla contra el Eva 04"
let aplucaDescuento = true

//Arreglo tradicional en js -- Los arreglos siempre deben nombrarse en PLURAL
//estos serán arreglos indexados
let nombresProductos = ["Figura Eva 01", "Camiseta Evangelion"]
let preciosProductos = [1000000, 70000]

console.log(nombresProductos)
console.log(preciosProductos)

//Creando un objeto en JavasScript - Los objetos son variables

let producto = {
    nombre: "Figura Eva01",
    precio: 1000000,
    descripcion: "Figura del Eva01 de la batalla con el Eva04",
    pilotos: ["Sinji Ikari", "Rei Ayanami"]
}

console.log(producto)
console.log(producto.nombre)
console-log(producto.pilotos[0])