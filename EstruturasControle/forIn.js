const notas = [7, 5, 6 ,7 ,8 ,9, 2, 0, 10]

for(i in notas) {
    console.log(`A nota ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}