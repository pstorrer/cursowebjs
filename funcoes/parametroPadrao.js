//estrategia 1 para gerar valor padrao
function soma1(a, b, c){
    a= a||0
    b= b||0
    c= c||0
    return a+b+c
}
console.log(soma1())
console.log(soma1(1,2,3))
console.log(soma1(3))
console.log(soma1(5,6))

//estrategia 2,3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a = a !== undefined ? a : 0
    b = 1 in arguments ? b : 0
    c = isNaN(c) ? 0 : c
    return a + b + c
}
console.log(soma2())
console.log(soma2(1))
console.log(soma2(1,2))
console.log(soma2(1,2,3))

//valor padrao do ES2015
function soma3(a=0, b=0, c=0){
    return a+b+c
}
console.log(soma3())
console.log(soma3(4,6))