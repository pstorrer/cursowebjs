const [a] = [10]
console.log(a)

const [n1,,n3,,n5] = [10,8,6]
console.log(n1,n3,n5)

const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)//segundo elemento da segundo item.