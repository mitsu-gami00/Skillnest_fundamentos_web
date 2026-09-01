let title = document.querySelector("#title");
console.log(title); // <h1 id="title">Soy emo🥀</h1>
    console.log(title.textContent); // Soy emo🥀

let parrafo = document.querySelector(".pemo");
console.log(parrafo); // <p class="pemo">Parrafo emo...</p>

parrafo.addEventListener("mouseover", function () {
    parrafo.textContent = "💔🔪";
});
    
parrafo.addEventListener("mouseout", function () {
    parrafo.textContent = "Parrafo emo...";
});

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="static/images/emo.jpg" alt="logo">

let parrafos = document.querySelector(".texto");
console.log(parrafos.textContent); // "Este es el primer párrafo."

let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

let botonE = document.querySelector("#boton-existente");

botonE.addEventListener("click", function () {
if (botonE !== null) {
    if (botonE.textContent === "Botón existente") {
    botonE.textContent = "No quiero seguir existiendo";
    botonE.style.backgroundColor = "black";
    } else {
        botonE.textContent = "Botón existente";
        botonE.style.backgroundColor = "#2b0000";
    }
} else {
    console.log("El botón no existe.");
}
})