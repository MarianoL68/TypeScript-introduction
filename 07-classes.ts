class Avenger {
    readonly name: string
    private powerScore: number 
    private readonly wonBattles: number = 0
    protected age: number = 0

    constructor(name: string, powerScore: number ) {
        this.name = name
        this.powerScore = powerScore
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