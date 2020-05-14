/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/
function calculadora(num1, operacao, num2){
    switch (operacao){
        case 'soma':
            return num1+num2
        case 'subtracao':
            return num1-num2
        case 'divisao':
            return num1/num2
        case 'multiplicacao':
            return num1*num2
        default:
            return 'Operacao invalida'
    }
}
console.log(calculadora(2, 'soma', 3),
calculadora(2, 'subtracao', 3),
calculadora(2, 'divisao', 3).toFixed(2),
calculadora(2, 'multiplicacao', 3),
calculadora(2, 'ble', 3))