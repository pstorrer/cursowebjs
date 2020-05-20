/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/
function mediaAritmetica(vetor){
    soma =0
    for(i in vetor)
        soma+=vetor[i]
    console.log(`Media Aritmetica: ${soma/vetor.length}`)
}
mediaAritmetica([1,2,3])