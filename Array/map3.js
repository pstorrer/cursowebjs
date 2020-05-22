Array.prototype.map2 = function (callback){
    const newArray = []
    for(let i=0; i<this.length;i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]
parseJSON = e=>JSON.parse(e)

retiraPrecos = e => e.preco

carrinhoPrecos = carrinho.map2(parseJSON).map2(retiraPrecos)

console.log(carrinhoPrecos)