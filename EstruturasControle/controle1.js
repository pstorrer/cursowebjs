function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado! Nota:' + nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(5)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...'+ valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo({})
seForVerdadeEuFalo([])
