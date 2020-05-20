/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/
function negativos(vetor){
    quantidadeNegativos =0
    for(i in vetor)
        if(vetor[i]<0)
            quantidadeNegativos++

    console.log(`Quantidade de negativos: ${quantidadeNegativos}`)
}
negativos([1,-2,3,4,5,-6,7,8,7,-6,5,3,0,15])