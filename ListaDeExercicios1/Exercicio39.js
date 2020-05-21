/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/
function trocaElementos(vetorA, vetorB){
    if(vetorA.length==vetorB.length){
        for(i in vetorA){
            vetorA.push(vetorB.shift())
            vetorB.push(vetorA.shift())
        }
        console.log(vetorA, vetorB)
    }
    else
        console.log('Tamanhos diferentes')
}
trocaElementos([1,2,3], [4,5,6])