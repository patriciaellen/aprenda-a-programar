let numeroInicial = 1
let numeroFinal = 1500450271
let contador = 0

while(numeroInicial <= numeroFinal){
    if(numeroFinal % numeroInicial == 0){
        contador = contador + 1 
    }
    numeroInicial = numeroInicial + 1
}

if(contador == 2){
    console.log(`Sim, o número ${numeroFinal} é primo!`)
} else {
    console.log(`Não, o número ${numeroFinal} não é primo!`)
}