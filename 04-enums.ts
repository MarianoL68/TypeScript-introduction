//Los enums se pueden utilizar para una colección de datos finita.
//Se puede usar tanto con const como si const. Se recomienda usar solo enum cuando creamos una biblioteca/librería o un componente que va hacia el exterior, que se pueda consumir desde afuera. 

 const enum ERROR_TYPES {
    NOT_FOUND, //0
    UNAUTHORIZED, //1
    FORBIDDEN //2
}

function mostrarMensaje (tipoDeError: ERROR_TYPES) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND){
        console.log('No se encuentra el recurso')
    } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED){
        console.log('No tienes permiso para acceder')
    } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes permisos para accerder')
    }
}