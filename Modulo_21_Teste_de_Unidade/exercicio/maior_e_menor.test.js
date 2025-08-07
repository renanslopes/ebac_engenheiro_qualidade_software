const { MaiorValor, MenorValor } = require('./maior_e_menor.mjs')
let numeros = [19, 7, 3, 11, 25, 34, 8, 30]

describe('Maior e menor valor em um array', () => {
    it('Maior valor', () => {
        expect(MaiorValor(numeros)).toBe(34)
    });
    it('Menor valor', () => {
        expect(MenorValor(numeros)).toBe(3)
    });
});