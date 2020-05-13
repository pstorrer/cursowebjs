let dobro = function (a){
    return 2*a
}

dobro = (a) => { 
    return 2*a
}

dobro = a => 2*a  //pode retirar o parenteses se for um unico parametro,
                  //pode tambem retirar os {} e ter um retorn implicito.
console.log(dobro(Math.PI))


let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui parametro, mas pode ignorar

console.log(ola())