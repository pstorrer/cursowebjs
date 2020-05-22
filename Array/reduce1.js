const alunos = [
    {nome: 'jao', nota:3.7, bolsista: false},
    {nome: 'ze', nota:8.7, bolsista: true},
    {nome: 'mane', nota:7.7, bolsista: false},
    {nome: 'ina', nota:6.7, bolsista: true}
]

const resultado = alunos.map(a=> a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador+atual
})
console.log(resultado.toFixed(2))