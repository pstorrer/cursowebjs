const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },
    {   nome: 'Ana',
        nota:9.3}]
},
{
    nome: 'Turma m2',
    alunos: [{
        nome:'Rebeca',
        nota:8.9
    },{
        nome:'Roberto',
        nota:7.3
    }]
}]

const getNotaAluno = a=>a.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotaTurma)
console.log(notas2)