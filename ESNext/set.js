//nao aceita repetição/não indexada
const times = new Set()
times.add('parana')
times.add('coritiba')
times.add('athletico').add('vasco').add('corinthias')
times.add('parana')

console.log(times)
console.log(times.size)
console.log(times.has('Parana'))
console.log(times.has('parana'))
times.delete('parana')
console.log(times.has('parana'))

const nomes = ['Jao', 'bao', 'tiao', 'Jao']
const nomesSet = new Set(nomes)
console.log(nomesSet)