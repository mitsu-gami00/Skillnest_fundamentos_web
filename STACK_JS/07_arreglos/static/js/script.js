let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos"

function X() {
    let nombres = ["Ana", "Pedro", "Maria", "Carlos"];
    alert(`${nombres[2]}`)
}

function mensaje() {

    let compras = [5000, 2300, 12000, 4500, 3000];

    let alumnos = ["Ana", "Pedro", "María", "José"];

    let datos = ["Carlos", 18, true];

    let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

    let mensaje = `${alumnos[1]} y ${datos[0]} compraron una ${frutas[3]} por ${compras[4]} pesos`
    alert(mensaje);
}


//La propiedad `.length` devuelve la cantidad de elementos.
function conteo() {
    let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
    alert(frutas.length); //4, conteo de elementos
}

function ultimo() {
    let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
    let ultima = frutas[frutas.length - 1];//siempre muestra el ultimo elemento
    console.log(ultima);
}

function penultimo() {
    let algo = ["Hola", "a", "todos", "los", "programadores"]
    alert(algo[algo.length - 2] + " " + algo[algo.length - 1])
}

function manipularArray() {
    let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
    listaTareas[1] = "Construir";
    alert(listaTareas.join(" - "));
}

function añadirF() {
    let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
    listaTareas.push("Construir");
    alert(listaTareas.join(" - "));
}

function eliminarF() {
    let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
    let eliminado = listaTareas.pop();
    alert(eliminado + " eliminado");
}

function añadirI() {
    let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
    listaTareas.unshift("Construir");
    alert(listaTareas.join(" - "));
}

function eliminarI() {
    let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
    let eliminado = listaTareas.shift();
    alert(eliminado + " eliminado");
}

let edades = [12,15,18,20,25];

for(let i=0;i<edades.length;i++){

    if(edades[i] >= 18){

        console.log(edades[i]);

    }

}

18
20
25