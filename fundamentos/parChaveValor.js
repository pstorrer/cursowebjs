//par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec(){
    const saudacao = 'Fallaaaaa' //contexto lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua da esquina 2',
        numero: 1234
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
