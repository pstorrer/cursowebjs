/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/
function parImpar(vetor){
    par =0
    impar =0
    for(i in vetor){
        if(vetor[i]%2)
            impar++
        else
            par++
    }
    console.log(`Pares: ${par}, Impares:${impar}`)
}
parImpar([2,3,4,5,6,7,8,9,10,11,122,4534,2345])