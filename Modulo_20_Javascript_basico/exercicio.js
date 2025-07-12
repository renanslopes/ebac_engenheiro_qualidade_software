let primeiroNumero
let segundoNumero
let numeroTemporario
let resto = 1
let numeros = [19, 7, 3, 11, 25, 34, 8, 30]


// Utlizando a função de identificar o maior e o menor, para calcular o  MDC
const MaiorValorConst = MaiorValor(numeros)
const MenorValorConst = MenorValor(numeros)
if (MaiorValorConst && MenorValorConst) {
    const resultadoMDC = calculaMdcDoisNumeros(MaiorValorConst, MenorValorConst)
    console.log(`O MDC entre ${MaiorValorConst} e ${MenorValorConst} é ${resultadoMDC}.`);
}

// Calculo do MDC de dois numeros
function calculaMdcDoisNumeros(primeiroNumero, segundoNumero) {
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

// Identificar o maior e menor numero de um array
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


//  Calculos de multiplos de 5 e 7 abaixo de 1000
function multiplos() {
    let multiplosDeCinco
    let multiplosdeSete
    for (let i = 1; i <= 1000; i++) {
        let cinco = i
        let sete = i
        let cincoAnterior = 0
        let seteAnterior = 0
        multiplosDeCinco = (cinco * 5) + cincoAnterior;
        cincoAnterior = i
        multiplosdeSete = (sete * 7) + seteAnterior;
        seteAnterior = i
    }
    total = multiplosDeCinco + multiplosdeSete
    return total
}
multiplos()