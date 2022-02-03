import Timer from '../TimerCore';

jest.useFakeTimers();

afterEach(() => {
    jest.useRealTimers();
})

describe('TimerCore', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setInterval');
    });

    it('starts a new timer when passed an input', () => {
        const timer = Timer.getInstance();

        timer.start();

        expect(setInterval).toHaveBeenCalled();
    })
})