console.log("Hola mundo");

/* Ejemplo de bucle for */
function cuenta2() {
    for (let i = 0; i < 3; i++) {
        alert(i);
    }
}

function cuenta5() {
    for (let i = 1; i < 6; i++) {
        alert(i);
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
    alert("🔥BOOM🔥");
}
function recorrerLista() { 
    //Lista es un tipo de dato (array/lista)
    // [] = ["nombre", 4, True, [2,4]]
    /*
    let nombre = "Carlos";
    alert(nombre)
    let nombres = ["Carlos", "Maria"]
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres[1]) --> Imprime Maria
    alert(nombres.length) --> Imprime 2 
    alert(nombres[0].length) --> Imprime 6 
    */
    let usuarios = ["Ana", "Luis", "María"];
    for (let i = 0; i < usuarios.length; i++) {
    alert("Bienvenido, " + usuarios[i]);
}
}

function sixSeven() {
    for (let i = 6; i < 8; i++) {
        alert(i);
    }
    alert("🔥SIX SEVEN🔥");
}
/* Ejemplo de bucle while */