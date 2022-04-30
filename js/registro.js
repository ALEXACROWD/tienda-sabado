import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro = document.getElementById("botonRegistro")
let modalInformativo = new bootstrap.Modal(document.getElementById('modalInformativo'))

botonregistro.addEventListener("click", function(event){

    event.preventDefault()//se indica esta acción que para cuando se de clic en el botón, este no refresque la página.

    let correo = document.getElementById("correo").value
    let password = document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
        .then((userCredential) => 
            {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                // ...
                let textoInformativo = document.getElementById("infoGeneral")
                let formulario = document.getElementById("formularioRegistro")
                formulario.reset()
                textoInformativo.textContent = "¡Registro Exitoso!"
                modalInformativo.show()
                setTimeout(function(){
                    modalInformativo.hide()
                },2000)
            })
        .catch((error) => 
            {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
                let textoInformativo = document.getElementById("infoGeneral")
                textoInformativo.textContent = "Ha ocurrido un error: " + errorMessage
                modalInformativo.show()
            });
})