//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto']= 'Generica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            rua: 'rua abc',
            numero: 123
        }
    },
    condutores: [
        {   nome: 'junior',
            idade: 23},
        {   nome: 'Ana',
            idade: 29
        }],
    calcularSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero=1000
carro['proprietario']['endereco']['rua'] = 'rua bcd'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro
console.log(carro)