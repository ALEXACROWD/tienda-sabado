///Importando módulos
import {pintarTienda} from './llenadoTienda.js'
import {ampliarImformacion} from '/js/ampliarInfo.js'

//llamando módulos
pintarTienda()
//ampliarImformacion()

//llamando al módulo de pintar información
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click", function(event){
    
    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    ampliarImformacion(event)
    modalinfoproducto.show()
})
