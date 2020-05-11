//recurso novo do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        rua: 'rua anc',
        numero: 1234
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemhumorada= true} = pessoa
console.log(sobrenome, bemhumorada)

const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)

const {conta: {agencia, numero}} = pessoa //erro, pois o caminho nao pode ser nulo ou undefined