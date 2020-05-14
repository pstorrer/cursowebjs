/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/
const dividePor3 = num => num%3 ? `${num} Não é divisivel por 3` : `${num} É divisível por 3`
console.log(dividePor3(7))
console.log(dividePor3(6))