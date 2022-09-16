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
}

const nombre = document.getElementById("nombre")
console.log(nombre)