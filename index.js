/*
const pizzas = [
    {
        id: 1,
        nombre: "Pizza de Pepperoni",
        ingredientes: [ " Pepperoni ", " Tomate ", " Queso ", " Orégano "],
        precio: 15
    },
    {
        id: 2,
        nombre: "Pizza Cuatro Estaciones",
        ingredientes: [ " Alcachofas ", " Jamón ", " Queso ", " Champiñones "],
        precio: 20
    },
    {
        id: 3,
        nombre: "Pizza Hawaiana",
        ingredientes: [ " Piña ", " Mozzarella ", " Jitomates ", " Jamón "],
        precio: 17
    },
    {
        id: 4,
        nombre: "Pizza Marinara",
        ingredientes: [ " Jitomates ", " Cebollas ", " Ajo ", " Hierbas Aromáticas "],
        precio: 16
    },
    {
        id: 5,
        nombre: "Pizza neoyorquina",
        ingredientes: [ " Jitomates ", " Verduras ", " Queso ", " Carnes "],
        precio: 18
    },
    {
        id: 6,
        nombre: "Pizza fugazza",
        ingredientes: [ " Cebolla ", " Tomate ", " Queso ", " Aceitunas "],
        precio: 19
    },
];


a(pizzas); //a) Las pizzas que tengan un id impar.
b(pizzas); //b) ¿Hay alguna pizza que valga menos de USD16?
c(pizzas); //c) El nombre de cada pizza con su respectivo precio.
d(pizzas); //d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).



function a(pizzas){
    pizzas.forEach( (pizza) => {
        if(pizza.id % 2 !== 0) {
            console.log('La '+ pizza.nombre + ' tiene un id impar.');
        }
    }
    )
}


function b(pizzas){
    const pizzaMenorA16 = pizzas.some( function (pizza){
        return pizza.precio <= 16
    });
    console.log(pizzaMenorA16 ? 'Hay pizzas menores a 16 Dólares.' : 'No hay pizzas menores a 16 Dólares.')
}


function c(pizzas){
    pizzas.forEach( (pizza) => console.log( 'La '+ pizza.nombre + ' tiene un precio de ' + pizza.precio + ' dólares.' )
)
}


function d(pizzas){
    pizzas.forEach( (pizza) => {
        console.log( 'La ' + pizza.nombre + ':')
        pizza.ingredientes.forEach((ingrediente) => {
        console.log('-' + ingrediente)
        })
    })    
}*/

const input = document.getElementById("input");
const h2 = document.getElementById("h2");
const h4 = document.getElementById("h4");
const btn = document.getElementById("btn");


class pizza {
    constructor(ID, nombre, ingredientes, precio) {
        this.ID = ID
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
    }

}

let pizzas = [pepperoni = new pizza(`1`, `Pizza de Pepperoni`, ingredientes = [" Pepperoni ", " Tomate ", " Queso ", " Orégano "], 15),
    cuatroEstaciones = new pizza(`2`, `Pizza Cuatro Estaciones`, ingredientes = [" Alcachofas ", " Jamón ", " Queso ", " Champiñones "], 20),
    hawaiana = new pizza(`3`, `Pizza Hawaiana`, ingredientes = [" Piña ", " Mozzarella ", " Jitomates ", " Jamón "], 17),
    marinara = new pizza(`4`, `Pizza Marinara`, ingredientes = [" Jitomates ", " Cebollas ", " Ajo ", " Hierbas Aromáticas "], 16),
    neoyorquina = new pizza(`5`, `Pizza Neoyorquina`, ingredientes = [" Jitomates ", " Verduras ", " Queso ", " Carnes "], 18),
    fugazza = new pizza(`6`, `Pizza Fugazza`, ingredientes = [" Cebolla ", " Tomate ", " Queso ", " Aceitunas "], 19),
]


// Función que se ejecuta si el resultado es correcto
function filtro(inputID) {
    const laPizza = pizzas.filter((piza) => piza.ID == inputID)
    for (piza of laPizza) {
        h2.innerHTML = `${piza.nombre}`;
        h4.innerHTML = `$ ${piza.precio}`;
    }
}

// Función que se ejecuta si el resultado es erroneo
function error() {

    h2.innerHTML = `No existe pizza para ese nro.`;
    h4.innerHTML = ``;

}


// acción del boton
btn.addEventListener('click', button)


function button(e) {
    e.preventDefault();
    var inputID = input.value.trim();
    inputID <= pizzas.length && inputID > 0 ? filtro(inputID) : error();
    input.value = ""
}