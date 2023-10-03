//❗❗❗ Inferencia
// a y b infieren que son number sin decirles que lo son
const a = 1;
const b = 2;
const c = a + b;
console.log(c)
// c también será un number

let cadenaDeTexto = 'hola';

cadenaDeTexto.toLocaleLowerCase()

// //Esto no funcionaría
// cadenaDeTexto = 2
// cadenaDeTexto.propiedadInexistente

//..............................................................

//❗any
let obj: any = { x: 0};

obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;

//..............................................................

// //❗❗❗functions
// function saludar(name: string) {
//     console.log(`Hola ${name}`)
// }

// saludar('Pepe')
// saludar(2) //esto no funciona

//...............................................................

// //❗❗❗TIPAR
// //🟣1era forma:
// function saludar({name, age} :{name: string, age: number}) {
//     console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar({name: 'Pedro', age: 5})

// //🟣2da forma
// function saludar(persona: {name: string, age: number}) {
//     const { name, age } = persona
//      console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar({name: 'Pedro', age: 5})

//......................................................................

//❗❗❗tipar lo que devuelven las funciones
//si pusiera : string, me saldría error porque age es un number y se espera un string
function saludar({name, age} :{name: string, age: number}) : number { 
    console.log(`Hola ${name}, tienes ${age} años`)
    return age
}

//..............................................................................................

//❗❗❗tipar funciones parametros

//void no representa ningun tipo, en este caso quiero decir que no espero que la función retorne algo.
const sayHiFromFunction = (fn: (name: string) => void) => {
    fn('Mariano')
}

const sayHi = (name: string) => {
    console.log(`Hello ${name}`)
}

sayHiFromFunction(sayHi)

//.................................................................................................

//❗❗❗tipar arrow functions

//🟣1era forma
const sumar = (a: number, b: number) : number => {
    return a - b
}

//🟣2da forma
const restar: (a: number, b: number) => number = (a, b) => {
    return a-b
}

//...................................................................................................

//🚫never, nunca va a devolver nada
function throwError(message: string): never {
    throw new Error(message)
}

//..................................................

//❗❗❗inferencia funciones anonimas según el contexto
const avengers = ['Thor', 'Dr.Strange', 'Vision']

avengers.forEach(avenger => {
    console.log(avenger.toUpperCase())
})
