function tratarErroLancar(erro) {
    //throw new Error('.e.r.r.o.')
    //throw 10
    //throw true
    throw {
        nome: erro.name,
        msg: erro.msg,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroLancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)
