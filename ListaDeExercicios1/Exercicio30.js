/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/
function maiorMenor(vetor){
    maior=vetor[0]
    menor=vetor[0]
    for(i in vetor){
        if(maior<vetor[i])
            maior = vetor[i]
        if(menor>vetor[i]){
            menor = vetor[i]
        }
    }
    console.log(`Maior: ${maior}, Menor: ${menor}`)
}
maiorMenor([1,2,3,4,5,6,7,8,7,6,5,3,0,15])