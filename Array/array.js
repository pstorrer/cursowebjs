console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Jojo'
aprovados.push('Fyil')
console.log(aprovados)

aprovados[9]='Diferentao'
console.log(aprovados)
console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)
delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,2)//(indice, nExclusoes, elementoAdd1, elemtnoAdd2, ...)
console.log(aprovados)