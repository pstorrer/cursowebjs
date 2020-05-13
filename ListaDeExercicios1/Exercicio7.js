/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/
function baskarah(a, b, c){
    delta = Math.pow(b,2) - (4*a*c)
    if(delta<0)
        console.log('Delta negativo, resolução imaginaria')
    else
        console.log(`${a}x²+${b}x+${c}=0 R1)${(-b+Math.sqrt(delta))/(2*a)} e R2)${(-b-Math.sqrt(delta))/(2*a)}`)
}
baskarah(1,3,-10)
baskarah(5,15,0)
baskarah(-2,8,0)
baskarah(1,-4,1)
baskarah(1,2,3)
baskarah(-1,-5,-3)
baskarah(2,0,-4)
baskarah(10,0,0)
