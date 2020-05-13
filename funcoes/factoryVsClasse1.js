class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Joao')
p1.falar()

const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
p2 = CriarPessoa('Joao')
p2.falar()