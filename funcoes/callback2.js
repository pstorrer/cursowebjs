const notas = [7.7, 6.2, 2.3, 1, 9.9, 10, 3.3]

// Sem callback
const notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota<7
})
console.log(notasBaixas2)

//callback com arrow function
const notasAltas = notas.filter(x => x>=7)
console.log(notasAltas)