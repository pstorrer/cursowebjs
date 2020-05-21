const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']
pilotos.pop() //massa bateu!
console.log(pilotos)
pilotos.push('Verstappen') //largou atrasado
console.log(pilotos)

pilotos.shift() //vetel bateu
console.log(pilotos)

pilotos.unshift('Hamilton') //apareceu em primeiro do nada
console.log(pilotos)

pilotos.splice(2,0, 'botas', 'massa') //botas apareceu e massa voltou, já ultrapassando raikonen e verstapen
console.log(pilotos)

pilotos.splice(3, 1) //massa bateu dnv
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do (2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //do 1 ao 4 (nao incluso)
console.log(algunsPilotos2)