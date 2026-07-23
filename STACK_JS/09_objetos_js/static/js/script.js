console.log("Conexión exitosa...!")

let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: ["Lechuga", "Pepinos", "Miel"],
    mostrarIngredientes: function () {
        alert(`Pan: ${this.pan}`);
        alert(`Carne: ${this.carne}`);
        alert(`Queso: ${this.queso}`);
        alert(`Extras: ${this.extras.join(", ")}`);
    }
};

let auto = {
    marca:"Toyota", 
    modelo:"Corolla", 
    año:2023,
    encender:function(){
        alert(`Encendiendo ${this.marca} ${this.modelo}`);
    }
};

let casa = {
    direccion:"Av. Siempre Viva 742",
    habitaciones:4,
    baños:2,
    mostrarInformacion:function(){
        alert(this.direccion);
    }
};