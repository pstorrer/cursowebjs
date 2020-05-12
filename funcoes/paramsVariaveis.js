function soma(){
    let soma = 0
    for(i in arguments)
        soma += arguments[i]
    return soma
}
console.log(soma())
console.log(soma(1,2,3))
console.log(soma(1000))
console.log(soma(1.2,4.5,3.44))
console.log(soma(1,2,3,"Teste", 4))
console.log(soma('a','b','c'))