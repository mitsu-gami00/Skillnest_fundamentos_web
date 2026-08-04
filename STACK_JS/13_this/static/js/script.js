// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Haz clic en mí";
    }
});

// Seleccionamos el botón por su id
let boton2 = document.getElementById("cambiarTexto2");

// Agregamos un evento 'click' al botón
boton2.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Estoy de relleno") {
        this.innerText = "¡Texto cambiado de nuevo!";
        this.style.backgroundColor = "blue";
    } else {
        this.innerText = "Estoy de relleno";
        this.style.backgroundColor = "red";
    }
});

// Seleccionamos el botón por su id
let boton3 = document.getElementById("cambiarTexto3");

// Agregamos un evento 'click' al botón
boton3.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "No hagas clic en mí") {
        this.innerText = "PERDEDOR";
        this.style.backgroundColor = "red";
    } else {
        this.innerText = "No hagas clic en mí";
        this.style.backgroundColor = "yellow";
    }
});

// Seleccionamos el botón por su id
let boton4 = document.getElementById("cambiarTexto4");

// Agregamos un evento 'click' al botón
boton4.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "GOOD BOY";
        this.style.backgroundColor = "green";
    } else {
        this.innerText = "Haz clic en mí";
        this.style.backgroundColor = "purple";
    }
});

// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
        // Eliminamos la imagen al hacer clic
        this.remove();
    });
});

//Reiniciar la pagina al hacer clic en el botón de reinicio
let botonReiniciar = document.getElementById("reiniciar");
botonReiniciar.addEventListener("click", function () {
    location.reload();
});
