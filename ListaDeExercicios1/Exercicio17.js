/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/
function novoSalario(salario, plano){
    switch (plano){
        case 'A':
            return salario*1.1
        case 'B':
            return salario*1.15
        case 'C':
            return salario*1.2
        default:
            return 'Plano incorreto'
    }
}
console.log(novoSalario(1000,'A'))
console.log(novoSalario(1000,'B'))
console.log(novoSalario(1000,'C'))
console.log(novoSalario(1000,'D'))