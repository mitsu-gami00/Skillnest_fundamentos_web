document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColor();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
document.getElementById("buttonColor").addEventListener("click", function () {
    cambiarColorBoton();
});

// Función que cambia el color del botón al hacer clic
function cambiarColorBoton() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("buttonColor").style.backgroundColor = colorAleatorio;
}
document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColorFondoYBoton();
});

// Función que cambia el color de fondo y del botón al hacer clic
function cambiarColorFondoYBoton() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio1 = colores[Math.floor(Math.random() * colores.length)];
    let colorAleatorio2 = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio1;
    document.getElementById("colorButton2").style.backgroundColor = colorAleatorio2;
}

