import { MaiorValor, MenorValor } from './maior_e_menor.mjs'
import { calculaMdcDoisNumeros } from './mdc.mjs'

let numeros = [19, 7, 3, 11, 25, 34, 8, 30]

// Utlizando a função de identificar o maior e o menor, para calcular o  MDC
const MaiorValorConst = MaiorValor(numeros)
const MenorValorConst = MenorValor(numeros)
if (MaiorValorConst && MenorValorConst) {
    const resultadoMDC = calculaMdcDoisNumeros(MaiorValorConst, MenorValorConst)
    console.log(`O MDC entre ${MaiorValorConst} e ${MenorValorConst} é ${resultadoMDC}.`);
}



