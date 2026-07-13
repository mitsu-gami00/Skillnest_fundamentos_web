function ejercicio1() {
    let nombre = prompt(`inserte su nombre`)
    let peso = parseInt(prompt(`Ingresa el peso del pedido`))
    if (peso <= 2) {
        alert(`nombre: ${nombre} 
        peso: ${peso} 
        Paquete: pequeño.
        precio del envio: 10.000`)
    }
    else if (peso > 2 && peso <= 5) {
        alert(`nombre: ${nombre} 
        peso: ${peso} 
        Paquete: mediano. 
        precio del envio: 15.000`)
    }
    else if (peso > 5 && peso <= 10) {
        alert(`nombre: ${nombre} 
        peso: ${peso} 
        Paquete: grande. 
        precio del envio: 20.000`)
    }
    else if (peso > 10) {
        alert(`nombre: ${nombre} 
        peso: ${peso} 
        Paquete: enorme. 
        precio del envio: 30.000`)
    }
    else {
        alert(`inserte valores validos`)
    }
}

function ejercicio2() {
    let usuario = prompt(`coloque que tipo de usuario es: `)
    let libros = parseInt(prompt(`coloque la cantidad de libros solicitados: `))
    if (usuario == "Estudiante" && libros > 5) {
        alert(`Estas excediendo los prestamos permitidos 
por favor solicite una cantidad valida`)
    }
    else if (usuario == "Estudiante" && libros <= 5) {
        alert(`Prestamo permitido :)`)
    }
    else if (usuario == "Profesor" && libros > 20) {
        alert(`usted esta excediendo los prestamos permitidos 
por favor solicite una cantidad valida`)
    }
    else if (usuario == "Profesor" && libros <= 20) {
        alert(`Prestamo permitido :)`)
    }
    else {
        alert(`ingrese valores validos`)
    }
}

function ejercicio3() {
    let nombre = prompt(`Ingresa tu nombre`)
    let edad = parseInt(prompt(`Ingresa tu Edad`))
    if (edad <= 10 && edad > 0) {
        alert(`Nombre: ${nombre}
            \nEdad: ${edad}
            \nCategoria: niño`)
    }
    else if (edad >= 11 && edad <= 17) {
        alert(`Nombre: ${nombre}
            \nEdad: ${edad}
            \nCategoria: Adolecente`)
    }
    else if (edad >= 18 && edad <= 60) {
        alert(`Nombre: ${nombre}
            \nEdad: ${edad}
            \nCategoria: Adulto`)
    }
    else if (edad > 60) {
        alert(`Nombre: ${nombre}
            \nEdad: ${edad}
            \nCategoria: Adulto mayor`)
    }
}

function ejercicio4() {
    let nombre = prompt(`Ingresa tu nombre:`)
    let añosEmpresa = parseInt(prompt(`Ingrese cuantos años estubo en esta empresa`))
    if (añosEmpresa < 5) {
        alert(`Usted (${nombre}) no puede recibir la bonificación 
por estar muy poco tiempo en servicio (${añosEmpresa})`)
    }
    else if (añosEmpresa > 5 && añosEmpresa < 10) {
        alert(`Usted (${nombre}) puede recibir una bonificación del 5% 
por sus años de servicio (${añosEmpresa})`)
    }
    else if (añosEmpresa > 10) {
        alert(`Ustes (${nombre}) puede recibir una bonificación del 15%
por sus años en servicio (${añosEmpresa})`)
    }
    else {
        alert(`ingrese valores validos`)
    }
}

function ejercicio5() {
    let nombre = prompt(`Ingresa tu nombre:`)
    let velocidad = parseInt(prompt(`Ingresa tu velocidad registrada (KM/H):`))
    if (velocidad <= 30 && velocidad > 10) {
        alert(`Usted (${nombre}) ha conseguido 10 puntos de 100 (Lento) (${velocidad}KM/H)`)
    }
    else if (velocidad <= 50 && velocidad > 30) {
        alert(`Usted (${nombre}) ha conseguido 30 puntos de 100 (Regular) (${velocidad}KM/H)`)
    }
    else if (velocidad <= 100 && velocidad > 50) {
        alert(`Usted (${nombre}) ha conseguido 50 puntos de 100 (Rapido) (${velocidad}KM/H)`)
    }
    else if (velocidad <= 140 && velocidad > 100) {
        alert(`Usted (${nombre}) ha conseguido 85 puntos de 100 (Muy rapido) (${velocidad}KM/H)`)
    }
    else if (velocidad <= 165 && velocidad > 140) {
        alert(`Usted (${nombre}) ha conseguido 100 puntos de 100 (Rayo) (${velocidad}KM/H) 
FELICITACIONES!`)
    }
    else if (velocidad > 165) {
        alert(`Usted (${nombre}) ha excedido el limite de esta competicion (Descalificado) (${velocidad}KM/H)`)
    }
    else {
        alert(`ingrese valores validos`)
    }
}