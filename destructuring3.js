function rand ({min = 0, max = 1000}){
    const aleatorio = Math.random()
    const valor =  aleatorio * (max-min) + min 
    console.log(aleatorio)
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))
//console.log(rand()) erro pois tenta desestruturar algo undefined ou nulo