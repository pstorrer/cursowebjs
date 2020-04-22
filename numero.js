const peso1 = 1.1
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.876
const avaliacao2= 6.543

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1+peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //converte em binario
console.log(typeof media)

/* cuidados */

console.log(7/0)
console.log("10" / 2)
console.log("Show" * 2) //not a number
console.log(0.1 + 0.7) //0.79999....
console.log((0.1 + 0.7).toFixed(2)) //0.79999....
//console.log(10.toString())
console.log((10.345).toFixed(2))