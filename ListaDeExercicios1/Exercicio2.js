/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/
function tipoTriangulo(a, b, c){
    if(a!=b&&b!=c)
        console.log(`Triangulo com lados ${a},${b} e ${c} é Escaleno.`)
    else if(a==b&&b==c)
            console.log(`Triangulo com lados ${a},${b} e ${c} é Equilátero.`)
    else
            console.log(`Triangulo com lados ${a},${b} e ${c} é Isósceles.`)
}

tipoTriangulo(1,2,3)
tipoTriangulo(2,2,3)
tipoTriangulo(2,2,2)