const { multiplos } = require('./multiplos')

describe('Multiplos', () => {
    it('Mutiplos de 5 e 7', () => {
        expect(multiplos()).toBe(12000)
    });
});