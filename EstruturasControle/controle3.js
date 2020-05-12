Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra!')
    }else if(nota >=7){
        console.log('Aprovado')
    }else {
        console.log('Reprovado!')
    }
    console.log('Fim')
}
imprimirResultado(9.5)
imprimirResultado(8)
imprimirResultado(5)

