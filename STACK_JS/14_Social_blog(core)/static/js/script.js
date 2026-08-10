// Seleccionamos el botón por su id
let boton = document.getElementById("iniciarSesion");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }
});

let likeBoton = document.querySelectorAll(".like");
likeBoton.forEach(function (button) {
    button.addEventListener("click", function () {
        let likeCount = this.querySelector("span");
        likeCount.innerText = parseInt(likeCount.innerText) + 1;
    });
});

//al presionar el boton de ver perfil, aparece una alerta con el mensaje "¡Bienvenido a tu perfil!"
let verPerfilBoton = document.getElementById("verPerfil");
verPerfilBoton.addEventListener("click", function () {
    alert("¡Bienvenido a tu perfil!");
});