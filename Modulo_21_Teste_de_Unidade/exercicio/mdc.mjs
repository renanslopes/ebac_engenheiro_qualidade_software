function calculaMdcDoisNumeros(primeiroNumero, segundoNumero) {
    let resto = 0
    let numeroTemporario = 1
    for (let i = 0; i == resto; i++) {
        if (primeiroNumero > segundoNumero) {
            resto = primeiroNumero % segundoNumero
            numeroTemporario = segundoNumero
            i = resto
            if (resto > 0) {
                resto = segundoNumero % resto
                numeroTemporario = resto
                i = resto
            }
        } else {
            resto = segundoNumero % primeiroNumero
            numeroTemporario = primeiroNumero
            i = resto
            if (primeiroNumero > resto) {
                resto = primeiroNumero % resto
                numeroTemporario = resto
                i = resto
            }
        }
    }
    console.log(`Antes do RETURN ${numeroTemporario}`)
    return numeroTemporario
}


module.exports = { calculaMdcDoisNumeros }