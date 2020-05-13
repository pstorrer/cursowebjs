//function declaration
console.log(soma(3,4)) //o interpretador do js carrega as funcoes antes.
function soma(x, y) {
    return x+y
}

//function expression
//console.log(sub(3,4)) não funciona pois não é carregado antes pelo interpretador. só pode ser chamada após
const sub = function(x, y){
    return x-y
}
console.log(sub(3,4))

//named function expression
//console.log(mult(3,4)) não funciona pois não é carregado antes pelo interpretador. só pode ser chamada após
const mult = function mult(x, y){
    return x*y
}
console.log(mult(3,4))
