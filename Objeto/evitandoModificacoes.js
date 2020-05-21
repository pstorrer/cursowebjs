//Object.prevenExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.00, tag: 'Promocao'
})
console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'teste incluir'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome:'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.cor = 'azul'
pessoa.nome = 'ana'
pessoa.idade = 36
delete pessoa.idade
console.log(pessoa)

//Object.freeze = selado + valores constantes
const carro = {marca: 'honda', cor: 'preto'}
Object.freeze(carro)
carro.cor='azul'
console.log(carro)