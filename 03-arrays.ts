// const languagues: string[] = []

// //otra forma de declarar
// const languages: Array<string> = []

//..................................................

const languages: (string | number)[] = []

languages.push('palabra')
languages.push(5)
// languages.push(true) //este no va a dejar

//...................................................

type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetaty' | 'galacty' | 'universal' | 'multiversal' 

type HeroBasicInfo = {
    name: string
    age: number
}

const heros: HeroBasicInfo[] = []

//.................................................................

//Matríces y Tuplas

/*
  [
    ['x', '0', 'x'], // string[]
    ['0', 'x', '0'], // string[]
    ['x', '', '0'], // string[]
  ]
*/

type CellValue = 'x' | '0' | ''
//esto es una tubla, es un array que tiene un limite de longitud fijado
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['x', '0', 'x'],
    ['0', 'x', '0'],
    ['x', '', '0'], 
]

//..............................................................................

// //otro ejemplo de tupla, con el hook useState de React

// type State = [string, (newName: string) => void]
// const [hero, setHero]: State = useState('thor')

//............................................................................

//otro ejemplo ejemplo de tupla

type RGB = [number, number, number]
const rgb: RGB = [3, 5, 8]

//Un problema con las tuplas es que son mutables. 

const black: RGB = [0, 0, 0]

black.push(4) // esto modificaría la tupla a 4 cuando le dijimos que queríamos 3. 

//Si queremos las tuplas fijas y poder solucionar esto podemos aplicar un readonly.

type teamRecord = readonly [number, number, number]

const belgrano: teamRecord = [15, 7, 3]

// belgrano.push(4) //esto ya no aplica
