// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en consola los objetos de cada pizza creada.

function pizzaOven(corteza, salsa, quesos, ingredientes){
    return {
        corteza,
        salsa,
        quesos,
        ingredientes
    };
}
let pizzaChicago = pizzaOven(
    "Tradicional",
    "Tradicional",
    "Mozarella",
    ["peperonni", "salchicha"]
)
let pizzaLanzada = pizzaOven(
    "Tradicional",
    "Marinara",
    ["Mozarella", "Feta"] ,
    ["Champiñones", "Aceitunas", "Cebollas"]
)
let PolloBbq = pizzaOven(
    "Tradicional",
    "Tradicional",
    "Mozarella",
    ["Pollo", "BBQ", "Choclo"]
)
let cuatroCarnes = pizzaOven(
    "Tradicional",
    "Tradicional",
    "Mozarella",
    ["Jamon", "Longanizilla", "Pollo", "Mechada"]
)
    alert(`Pizza Chicago:
    Corteza: ${pizzaChicago.corteza}
    Salsa: ${pizzaChicago.salsa}
    Quesos: ${pizzaChicago.quesos}
    Ingredientes: ${pizzaChicago.ingredientes.join(", ")}`);

    alert(`Pizza Lanzada:
    Corteza: ${pizzaLanzada.corteza}
    Salsa: ${pizzaLanzada.salsa}
    Quesos: ${pizzaLanzada.quesos}
    Ingredientes: ${pizzaLanzada.ingredientes.join(", ")}`);

    alert(`Pizza 4 Carnes:
    Corteza: ${cuatroCarnes.corteza}
    Salsa: ${cuatroCarnes.salsa}
    Quesos: ${cuatroCarnes.quesos}
    Ingredientes: ${cuatroCarnes.ingredientes.join(", ")}`);

    alert(`Pizza Pollo BBQ:
    Corteza: ${PolloBbq.corteza}
    Salsa: ${PolloBbq.salsa}
    Quesos: ${PolloBbq.quesos}
    Ingredientes: ${PolloBbq.ingredientes.join(", ")}`);

// Ejemplo de objeto

// Antes de comenzar con las pizzas, revisemos un ejemplo con sándwiches para entender la lógica:

// let sandwich = {
//    pan: "masa madre",
//    proteina: "asado",
//    queso: "queso suizo",
//    salsas: ["lechuga", "tomates", "salsa de rábano"]
// };
  
// console.log(sandwich);
// En este caso, has creado un objeto sandwich con diferentes propiedades. Pero, ¿qué pasa si quieres hacer varios sándwiches sin escribir todo manualmente cada vez? Puedes crear una fábrica de sándwiches usando una función que devuelva un objeto:

// function sandwichFactory(pan, proteina, queso, salsas) {
//    let sandwich = {};
//    sandwich.pan = pan;
//    sandwich.proteina = proteina;
//    sandwich.queso = queso;
//    sandwich.salsas = salsas;
//    return sandwich;
// }
  
// let s1 = sandwichFactory(
//    "trigo",
//    "pavo",
//    "provolone",
//    ["mostaza", "cebolla frita", "rúcula"],
// );
// console.log(s1);
// Explicación

// 🥪 La función sandwichFactory permite crear objetos con diferentes combinaciones de ingredientes.

// 🍞 En cada llamada a la función, puedes personalizar el sándwich con diferentes ingredientes sin escribir código repetitivo.

// Ahora, es tu turno de hacer lo mismo con las pizzas.

 

// 💡 Tips

// 🧠 Piensa en cada pizza como un objeto con propiedades.

// 🔢 Usa un arreglo para los ingredientes y quesos, ya que una pizza puede tener más de uno.

// 🧹 Mantén la sintaxis clara y organizada para que tu código sea fácil de leer y modificar.

// 🔍 Recuerda que puedes acceder a las propiedades de tu pizza con pizza.propiedad o modificarla si lo necesitas.

 

// 📚 Contenidos que estás aplicando

// 🧱 Creación de objetos en JavaScript.

// 🔁 Uso de funciones para generar objetos dinámicamente.

// 📦 Aplicación de arreglos dentro de objetos.

// 🧭 Acceso a propiedades de un objeto en JavaScript.

// 🤔 Preguntas y reflexión

// ¿Cómo te ayuda el uso de objetos y funciones a escribir código más reutilizable y organizado?

// 🎉 Resultado esperado
// // Al finalizar la asignación, habrás creado cuatro pizzas diferentes usando una función que genera objetos. Estas pizzas estarán estructuradas de manera clara y organizada, demostrando cómo los objetos y funciones permiten generar datos dinámicos sin necesidad de escribir código repetitivo.