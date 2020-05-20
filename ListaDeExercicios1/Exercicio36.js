/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/
function funcaoMultiplicaNormal (vetorNumero, valorMultiplicar){
    for(i in vetorNumero)
        vetorNumero[i]*=valorMultiplicar
    return vetorNumero
}
function funcaoMultiplicaSeMaiorQue5 (vetorNumero, valorMultiplicar){
    if(valorMultiplicar>5)
        for(i in vetorNumero)
            vetorNumero[i]*=valorMultiplicar
    return vetorNumero
}
console.log(funcaoMultiplicaNormal([1,2,3], 2))
console.log(funcaoMultiplicaSeMaiorQue5([1,2,3], 2))
console.log(funcaoMultiplicaSeMaiorQue5([1,2,3], 6))