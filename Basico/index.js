/*Las condicionales sona las reglas que podemos colocar en nuestro programa*/


if (false) {
    console.log("hola");
} else {
    console.log("Soy falso");
}


/*Validacion de mas de una */

const edad = 10;


if (edad === 18) {
    console.log("Puedes votar, sera tu 1era votación")

} else if (edad > 18) {
    console.log("Puede votar de nuevo")
} else {
    console.log("AUN NO PUEDE VOTAR")
}

/*Variables*/
/*Validaciones*/

/*Juego de piedra papel o tijera */

const resultado = juego("piedra", "papel");


function juego(jugador1, jugador2) {
    if (jugador1 == jugador2) {
        return "! EMPATE !";
    } else if (
        (jugador1 === "piedra" && jugador2 === "tijera") ||
        (jugador1 === "Tijera" && jugador2 === "papel") ||
        (jugador1 === "Papel" && jugador2 === "piedra")
    ) {
        return "jugador 1 gana ";
    } else {
        return "jugador 2 gana";
    }
}

console.log(resultado); // Esto imprimirá "Jugador 1 gana"

/* 
    Switch.js 
    -- Es una manera de generar una condicion de poder validar ciertas cosas 
    -- Si es verdad va pasar esta parte si no es verdad volvera a preguntar 
*/

function jugarPiedraPapelTijera(jugador1, jugador2) {
    jugador1 = jugador1.toLowerCase();
    jugador2 = jugador2.toLowerCase();

    switch (`${jugador1}-${jugador2}`) {
        case 'piedra-tijera':
        case 'papel-piedra':
        case 'tijera-papel':
            return 'Jugador 1 gana';
        case 'tijera-piedra':
        case 'piedra-papel':
        case 'papel-tijera':
            return 'Jugador 2 gana';
        case 'piedra-piedra':
        case 'papel-papel':
        case 'tijera-tijera':
            return 'Empate';
        default:
            return 'Opción no válida';
    }
}

// Ejemplo de uso
const resultado2 = jugarPiedraPapelTijera('piedra', 'tijera');
console.log('Resultado:', resultado);


/*
  El ciclo es una manera en la cual una tarea puede REPETIRSE sin necesitadad de hacerlo manual 
  y hasta que no se cumpla este ciclo seguira en funcion
*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Holan, ${estudiante}`);
}

// Estamso generando una variable que es igual a 0 y que sea menor a la longitud del array del estudiante 

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i])
}

/*
    Objetos :

    Un objeto en javaScript es por medio de 
    un {}
        
    Los objetos se manejan por medio de valores y propiedades 

    this = Es una variable que hace referencia al objeto 
    
*/

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: "2020",
    detalleDelAuto: function () {
        /*Esta es la forma en la cual podemos hacer refenrecia a nuestros objetos*/
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};



/* 
    Funcion contructora 
    Como podemos hacer varias objetos?

    funcion es la manera en la cual podemos hacer tareas o procesos 
*/


function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


var autoNuevo = new auto("Tesla", "Modelo 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);



/*
    Metodos de recorridos en Arrays 
*/


var articulos  = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv",   costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Laptop", costo: 20000},
    { nombre: "teclado", costo: 200},
    { nombre: "audifonos", costo: 200}
];

/* 

    Filter nos ayuda a validar si algo es falso 
    
*/

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});


console.log(articulosFiltrados);


/* 
    Map : Me va a ayudar a mapear ciertos articulos 
*/


var articulos  = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv",   costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Laptop", costo: 20000},
    { nombre: "teclado", costo: 200},
    { nombre: "audifonos", costo: 200}
];


var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre 
});

console.log(nombreArticulo);


/* 

    find : Nos va ayudar a encontrar algo en el articulo 

    valida un true o false en caso de que el articulo exista 

*/


var articulos  = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv",   costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Laptop", costo: 20000},
    { nombre: "teclado", costo: 200},
    { nombre: "audifonos", costo: 200}
];


var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo);


articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});




/* 
    Some ()
    Nos va regresar una validacion de verdadero o falso 

    validar si funciona o no 
*/



var articulos  = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv",   costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Laptop", costo: 20000},
    { nombre: "teclado", costo: 200},
    { nombre: "audifonos", costo: 200}
];

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);


/*

Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
 */