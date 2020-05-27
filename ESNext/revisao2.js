//Arrow function
const soma = (a,b)=> a+b //return implicito
console.log(soma(2,3))

//arrow function (this)
const lexico = () => console.log(this===exports)
lexico()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Testeeee')

//operador rest
function totalSoma(...numeros){
    let total = 0
    numeros.forEach(n => total +=n)
    return total
}
console.log(totalSoma(2,3,4))