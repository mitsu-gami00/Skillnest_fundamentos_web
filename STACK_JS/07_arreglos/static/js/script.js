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

//## Ejercicio 10 (Desafío)
// - Total de ventas.
// - Promedio.
// - Venta mayor.
// - Venta menor.
// - Cantidad de ventas mayores a $10.000.
// - Cantidad de ventas menores o iguales a $10.000.
// - Índice donde ocurrió la venta mayor.
// - Índice donde ocurrió la venta menor.
function desafio() {
    let ventas = [12000, 18000, 5000, 21000, 9000, 15000, 8000];
    let total = 0;
    for (let i = 0; i <= ventas.length - 1; i++) {
        total += ventas[i]
    }
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
        let promedio = total / ventas.length;
        alert(`Total de ventas: ${ventas.length}`)
        alert(`Promedio: ${promedio.toFixed(0)}`)
        alert(`Venta mayor: ${mayor}`)
    }


// # 🚀 Desafío Final

// Una empresa registra las ventas de sus vendedores.

// ```javascript
// let vendedores = ["Ana","Pedro","María","José","Camila"];

// let ventas = [350000,510000,420000,610000,480000];
// ```

// Desarrolla un programa que permita:

// 1. Mostrar cada vendedor con su venta.
// 2. Calcular el total vendido.
// 3. Calcular el promedio.
// 4. Mostrar el mejor vendedor.
// 5. Mostrar el vendedor con menor venta.
// 6. Mostrar los vendedores que vendieron más de $450.000.
// 7. Contar cuántos vendedores superaron el promedio.
// 8. Indicar si la empresa alcanzó una meta de **$2.300.000**.

// ### ⭐ Desafío Extra

// Permite que el usuario agregue nuevas ventas utilizando:

// - `push()`
// - `pop()`
// - `shift()`
// - `unshift()`

// y vuelve a calcular todas las estadísticas automáticamente.