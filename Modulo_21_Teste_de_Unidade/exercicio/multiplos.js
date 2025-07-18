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
    console.log(total)
    return total
}
multiplos()

module.exports = { multiplos }