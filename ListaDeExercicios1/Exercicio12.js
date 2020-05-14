/*12) Faça um algoritmo que calcule o fatorial de um número.*/
function fatorial(numero){
    resultado=1
    for(let i=numero; i>1; i--)
        resultado*=i
    return resultado
}
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
