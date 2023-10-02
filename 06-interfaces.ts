interface Heroe {
    id: string
    name: string
    age: number
    saludar: () => void
}

const hero: Heroe = {
    id: '1',
    name: 'spiderman',
    age: 30,
    saludar: () => {
        console.log('Hola')
    }
}
 //.........................................................


 //las interfaces también pueden estar anidadas
interface Producto {
    id: number
    nombre: string
    precio: number
    quantity: number
}

//las interfaces se pueden extender
interface Zapatilla extends Producto {
    talle: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: Zapatilla[]
}

//indicar funciones
interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,
    clear: () => void
}

const carrito: CarritoDeCompras = {
    totalPrice: 200,
    productos: [
        {
            id: 1,
            nombre: 'prodcuto 1',
            precio: 50,
            quantity: 2,
            talle: 5
        }
    ]
}