/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/
function caracteresUnicos(string1, string2){
    lista1=[]
    lista2=[]
    for(a in string1){//separar a string 1 em uma lista com valores unicos
        if(lista1.indexOf(string1[a])==-1)
            lista1.push(string1[a])
    }
    for(a in string2){//separar a string 2 em uma lista com valores unicos
        if(lista2.indexOf(string2[a])==-1)
            lista2.push(string2[a])
    }
    if(lista1.length != lista2.length)//ver se cada lista com valores unicos tem o mesmo tamanho
        return false
    else{
        for(a in lista1)
            if(lista2.indexOf(lista1[a])==-1)//se tem o mesmo tamanho a lista1 deve ter todos os seus elementos na lista2
                return false
        return true
    }
}
console.log(caracteresUnicos('teste', `testes`))
console.log(caracteresUnicos('teste1', `testes`))
console.log(caracteresUnicos('teste', `testes1`))
console.log(caracteresUnicos('teste12', `testes11`))
console.log(caracteresUnicos('teste11', `testes12`))