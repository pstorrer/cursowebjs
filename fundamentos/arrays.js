const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores)
console.log(valores[4])

valores[4]=10
console.log(valores[4])
valores[10]=13
console.log(valores)
console.log(valores.length)
console.log(valores.pop())
valores.push({id : 3}, false, null, 'teste')
console.log(valores)
delete valores[1]
console.log(valores)
