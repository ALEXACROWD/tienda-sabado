///Importando módulos
import {pintarTienda} from './llenadoTienda.js'
import {ampliarImformacion} from '/js/ampliarInfo.js'
import {anadirCarrito} from './anadirCarrito.js'

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

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))

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

    anadirCarrito(suma)
    modalinfoproducto.hide()

})


let limpiarCarro = document.getElementById("limpiar")
limpiarCarro.addEventListener("click", function(event){
    carrito=[]
    let capsula = document.getElementById("capsula")
    capsula.textContent = 0
    capsula.classList.add("invisible")
})

//4. Ver resumen de venta (lo que debe aparecer cuando le doy clic al carrito)

let botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click", function(event){
    event.preventDefault()
    
    let contenedor = document.getElementById("contenedorVenta")

    let modalventa = new bootstrap.Modal(document.getElementById('resumenCarrito'))

    //borrar el contenido HTML de una seccion
    contenedor.innerHTML=""

    //Recorrer el carrito para pintar los productos en la factura
    productosCarrito.forEach(function(producto){
        //Traversing
        let fila = document.createElement("div")
        fila.classList.add("row")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-12", "col-md-4")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-12", "col-md-8", "align-self-center")

        let foto = document.createElement("img")
        foto.classList.add("img-fluid", "w-100")
        foto.src = producto.foto

        let nombreProducto = document.createElement("h3")
        nombreProducto.classList.add("card-tittle")
        nombreProducto.textContent=producto.nombre

        let precioProducto = document.createElement("h5")
        nombreProducto.classList.add("text-center")
        precioProducto.textContent= "Precio unidad: " + producto.precio

        let cantidad = document.createElement("h5")
        cantidad.classList.add("text-center")
        cantidad.textContent="Cantidad: " + producto.cantidad

        let subtotal = document.createElement("h4")
        subtotal.classList.add("text-center")
        subtotal.textContent= "Subtotal: " + producto.cantidad * producto.precio

        //Padres e hijos

        columna1.appendChild(foto)

        columna2.appendChild(nombreProducto)
        columna2.appendChild(cantidad)
        columna2.appendChild(precioProducto)
        columna2.appendChild(subtotal)
        
        fila.appendChild(columna1)
        fila.appendChild(columna2)

        contenedor.appendChild(fila)

    })

    //let total = document.createElement("h4")
    //total.classList.add("text-center")
    //total.textContent = "Total: " + subtotal

    modalventa.show()
})
