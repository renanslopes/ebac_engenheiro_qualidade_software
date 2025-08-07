function MaiorValor(numeros) {
    let maiorNumero = 0
    for (let index = 0; index < numeros.length; index++) {
        numeros[index] > maiorNumero ? maiorNumero = numeros[index] : ""
    }
    return maiorNumero
}
function MenorValor(numeros) {
    let menorNumero = numeros[0]
    for (let index = 1; index < numeros.length; index++) {
        numeros[index] < menorNumero ? menorNumero = numeros[index] : ""
    }
    return menorNumero
}


module.exports = { MaiorValor, MenorValor }