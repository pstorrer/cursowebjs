/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/
function conceitoNotas(Notas){
    for(i in Notas){
        if(Notas[i]<5)
            conceito='D'
        else if(Notas[i]<7)
            conceito='C'
        else if(Notas[i]<9)
            conceito='B'
        else
            conceito='A'
        console.log(`Nota ${Notas[i]}=${conceito}`)
    }
}
conceitoNotas([0.5, 10, 2.2, 5.5, 8.6, 2, 7.5, 9.5, 10])