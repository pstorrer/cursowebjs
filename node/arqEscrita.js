const fs = require('fs')
const produto = {
    nome: 'Celular',
    preco: 1999.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arqGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo Salvo')
})