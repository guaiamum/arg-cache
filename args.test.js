import logger, { factoryGeneric } from './index.js'

describe('factoryGeneric', () => {
    const oldCLG = console.log;
    beforeAll(() => {
        console.log = () => { }
    });

    afterAll(() => {
        console.log = oldCLG
    });

    it('calls with right args', () => {
        const loggerFactored = factoryGeneric('dois', 'tres');
        const result = loggerFactored('um');

        expect(result).toHaveBeenNthCalledWith(1, 'um', 'dois', 'tres')
    })
})