{
    {
        {
            {
                 var sera = 'Será???'
                 console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
//console.log(local) nao acessivel, apenas dentro da funcao.

var numero = 1
{
    var numero = 2
    console.log('dentro', numero)
}
console.log('fora', numero)

