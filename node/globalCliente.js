require('./global')
console.log(MinhaApp.saudacao())

console.log(MinhaApp.nome)
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) //pode usar o freeze para não ser mutável.
