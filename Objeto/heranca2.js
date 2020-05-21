//cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //não fazer isso, impacto global

const avo = {attr1: 'vo'}
const pai = { __proto__:avo, attr2:'pa'}
const filho = {__proto__:pai, attr3:'fi'}
console.log(filho.attr1)
console.log(filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelera(delta){
        if(this.velAtual+delta <= this.velMax)
            this.velAtual+=delta
        else
            this.velAtual=this.velMax
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelera(100)
console.log(volvo.status())
ferrari.acelera(300)
console.log(ferrari.status())