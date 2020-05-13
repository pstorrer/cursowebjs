/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
function jurosSimples(capitalInicial, taxaJuros, tempo){
    simples=capitalInicial*(1+(taxaJuros*tempo))
    return simples.toFixed(2)
}
function jurosComposto(capitalInicial, taxaJuros, tempo){
    while(tempo!=0)
        return jurosComposto(capitalInicial*(1+(taxaJuros)), taxaJuros, tempo-1)
    return capitalInicial.toFixed(2)
}

console.log(jurosSimples(100, 0.01, 10))
console.log(jurosComposto(100, 0.01, 10))