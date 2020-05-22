const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]
parseJSON = e=>JSON.parse(e)

retiraPrecos = e => e.preco

carrinhoPrecos = carrinho.map(parseJSON).map(retiraPrecos)

console.log(carrinhoPrecos)