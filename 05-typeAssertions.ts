const canvas = document.getElementById('span')

//null si no lo encuenta
//HTMLElemente si lo encuentra

// ?? como sabe TypeScript que realmente estas recuperando un elemento <canvas />?

//es inferencia, TS se da cuenta que dentro del if ya solo el canvas va a poder ser un HTMLCanvasElement
if(canvas instanceof HTMLCanvasElement) { // ✅
    //acá no entra
    const ctx = canvas.getContext('2d')
}

//Por qué funciona en TS y JS? 
//TS está deduciendo que canvas es un HTMLCanvasElement
//JS está ejecutando el código de la condición