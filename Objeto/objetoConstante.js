//pessoa -> 123 -> {...}
const pessoa = {nome:'joao'}
pessoa.nome = 'Pedro'

//pessoa -> 456 -> {..}
//pessoa = { nome: 'Ana'} não pode alterar o apontamento de memória de uma constante.

Object.freeze(pessoa)
pessoa.endereco = 'rua abc' //está 'congelado'
pessoa.nome = 'Maria' //está 'congelado'
delete pessoa.nome //está 'congelado'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'Joao'})
console.log(pessoaConstante)