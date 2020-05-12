let contador = 1
while(contador <=10){
    console.log(`loop numero ${contador}`)
    contador++
}

for(let i=1; i<=10; i++){
    console.log(`loop for numero ${i}`)
}

const notas = [6, 7, 8, 9 ,10]
for(let i=0; i<notas.length; i++) //usar o 'let i' para ficar disponivel apenas no laço
    console.log(`nota é: ${notas[i]}`)