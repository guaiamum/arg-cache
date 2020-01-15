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
        loggerFactored('um');

        expect(loggerFactored).toHaveBeenNthCalledWith(1, 'um', 'dois', 'tres')
    })
})