const { soma, dobro } = require('./codigo')

describe('funcoes matematicas', () => {
    it('soma de dois valores', () => {
        expect(soma(2, 5)).toBe(7)
        expect(soma(2, 4)).toBe(6)
    });

    it('dobro de um valor', () => {
        expect(dobro(4)).toBe(8)
    });
});