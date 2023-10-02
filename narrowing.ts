function mostrarLongitud (objeto: number | string) {
    if(typeof objeto === 'string') {
        return objeto.length
    }

    return objeto.toString().length
}

mostrarLongitud('3')

//.................................................................

// interface Mario {
//     company: 'Nintendo'
//     nombre: string
//     saltar: () => void
// }

// interface Sonic {
//     company: 'Sega'
//     nombre: string
//     correr: () => void
// }

// type Personaje = Mario | Sonic

// function jugar(personaje: Personaje) {
//     if(personaje.company === 'Nintendo') {
//         personaje.saltar() // Este es Mario
//         return
//     }

//     //seguro que solo llega a Sonic
//     personaje.correr()
// }

//..............................................................

//y si no tuviera la company para poder diferenciar?

interface Mario {
    nombre: string
    saltar: () => void
}

interface Sonic {
    nombre: string
    correr: () => void
}

type Personaje = Mario | Sonic

//type guard
//dejame comprobar si personaje es sonic
//esta función determina si es sonic o no
function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}

function jugar(personaje: Personaje) {
    if(checkIsSonic(personaje)) {
        personaje.correr
    }
}