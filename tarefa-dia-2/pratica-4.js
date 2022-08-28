// Verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if(produtoA["internacional"]){
    // Calcular 20%
    console.log(`${produtoA["nome"]} ${produtoA["valor"]*1.2}`)
} else { 
    // Calcular 12%
    console.log(`${produtoA["nome"]} ${produtoA["valor"]*1.12}`)
}

if(produtoB["internacional"]){
    console.log(`${produtoB["nome"]} ${produtoB["valor"]*1.2}`)
} else {
    console.log(`${produtoB["nome"]} ${produtoB["valor"]*1.12}`)
}

if(produtoC["internacional"]){
    console.log(`${produtoC["nome"]} ${produtoC["valor"]*1.2}`)
} else {
    console.log(`${produtoC["nome"]} ${produtoC["valor"]*1.12}`)
}
