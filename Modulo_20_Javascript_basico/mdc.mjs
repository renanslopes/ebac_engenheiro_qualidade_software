export function calculaMdcDoisNumeros(primeiroNumero, segundoNumero) {
    // let primeiroNumero
    // let segundoNumero
    // let numeroTemporario
    let resto = 1

    for (let i = 0; resto == 0; i++) {
        if (primeiroNumero > segundoNumero) {
            resto = primeiroNumero % segundoNumero
            if (resto == 0) {
                numeroTemporario = segundoNumero
            } else {
                resto = segundoNumero % resto
            }
        } else {
            resto = segundoNumero % primeiroNumero
            numeroTemporario = resto
            if (primeiroNumero > resto) {
                resto = primeiroNumero % resto
            }
        }
    }
    return resto
}