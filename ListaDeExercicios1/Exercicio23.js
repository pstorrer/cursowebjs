/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 7 e
"REPROVADO" se a média for menor que 7. Repita a operação até que o código lido seja negativo.*/
media = (codigo,nota1,nota2,nota3) => (nota1*0.3+nota2*0.3+nota3*0.4) >=7 ? `${codigo} Aprovado` : `${codigo} Reprovado`

console.log(media(123, 10,10,10))
console.log(media(124, 6,6,8))
console.log(media(225, 6,6,8.5))
console.log(media(226, 7,7,5))