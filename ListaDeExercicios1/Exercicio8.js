/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo)*/
function relatorioJogo(pontosString){
    pontos = pontosString.split(", ")
    quebraRecords = -1
    melhor = 0
    pior = 999
    indicePior =-1
    for(indice in pontos){
        if(Number(pontos[indice])>Number(melhor)){
            melhor = pontos[indice]
            quebraRecords++
        }
        if(Number(pontos[indice])<Number(pior)){
            pior = pontos[indice]
            indicePior=indice
        }
    }
    return [quebraRecords, melhor, indicePior]
}
console.log(relatorioJogo('100, 20, 30, 30, 1000'))

//test pull
