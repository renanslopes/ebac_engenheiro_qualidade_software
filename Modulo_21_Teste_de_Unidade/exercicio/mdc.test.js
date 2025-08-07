const { calculaMdcDoisNumeros } = require('./mdc.mjs')
// import { calculaMdcDoisNumeros } from './mdc.mjs'

describe('Função matemática', () => {
    it('MDC de 2 números', () => {
        expect(calculaMdcDoisNumeros(130, 90)).toBe(10)
    });
});