interface Avenger {
    name: string
    powerScore: number
    wonBatlles: number
    age: number
    // battle: (enemy: Avenger, win: boolean) => void
}

class Avenger implements Avenger {
    // readonly name: string
    // private powerScore: number 
    // private readonly wonBattles: number = 0
    // protected age: number = 0

    constructor(name: string, powerScore: number ) {
        this.name = name
        this.powerScore = powerScore
    }

    battle (enemy, win) {
        if(win) {
            this.wonBatlles++
            this.powerScore += 5
        } else {
            this.powerScore -= 5
        }
    }

    get fullName() {
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number) {
        if(newPower < 100) {
            this.powerScore = newPower
        } else {
            throw new Error('Power score cannot be more than 100')
        }
    }
}