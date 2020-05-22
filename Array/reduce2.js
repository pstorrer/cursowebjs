const alunos = [
    {nome: 'jao', nota:3.7, bolsista: false},
    {nome: 'ze', nota:8.7, bolsista: true},
    {nome: 'mane', nota:7.7, bolsista: false},
    {nome: 'ina', nota:6.7, bolsista: true}
]

//desafio: todos os alunos são bolsistas? V or F
//desafio: algum aluno é bolsista? V or F
saoBolsistas = aluno => aluno.bolsista
funcSaoBolsa = (acum, atual) => acum&&atual
funcAlgumBolsa = (acum, atual) => acum||atual
console.log(alunos.map(saoBolsistas).reduce(funcSaoBolsa))
console.log(alunos.map(saoBolsistas).reduce(funcAlgumBolsa))
