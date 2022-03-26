///Importando módulos
import {pintarTienda} from './llenadoTienda.js'
import {ampliarImformacion} from '/js/ampliarInfo.js'

//crear producto vacío
let producto={}

//llamando módulos
pintarTienda()

//llamando al módulo de ampliarImformacion()

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click", function(event){
    if(event.target.classList.contains("btn")){
    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    
    //Cargar informacion del producto dentro del modal
    producto=ampliarImformacion(event)
    modalinfoproducto.show()
    }
})

//Detectar la acción de añadir al carrito
//productosCarrito=es una arreglo de productos (productos = objetos)
let productosCarrito = []

let boton = document.getElementById("botonAdd")
boton.addEventListener('click', function(event){
    //console.log("Estoy añadiendo al carrito")

    //1. Capturar la cantidad del producto.
    let cantidad = document.getElementById("cantidadProducto").value//se agrega value para capturar lo que hay dentro de la etiqueta y solo se usa en los imput
    
    
    //2. agrego la cantidad al objeto producto
    producto.cantidad=cantidad

    //3. agregar el producto al carrito
    productosCarrito.push(producto)

    //4.Calculo la sumatoria de cantidad
    let suma = 0
    productosCarrito.forEach(function(producto){
        suma = suma + Number(producto.cantidad)         
    })

    let capsula = document.getElementById("capsula")
    capsula.textContent=suma

    capsula.classList.remove("invisible")

})

let limpiarCarro = document.getElementById("limpiar")
limpiarCarro.addEventListener("click", function(event){
    carrito=[]
    let capsula = document.getElementById("capsula")
    capsula.textContent = 0
    capsula.classList.add("invisible")
})
