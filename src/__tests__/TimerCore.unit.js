import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import * as sinon from 'sinon';

import Timer from '../TimerCore.js';

const timer = suite('Timer');

timer.before.each((context) => {
    const clock = sinon.useFakeTimers();

    context.clock = clock;
    context.setIntervalSpy = sinon.spy(clock, 'setInterval');
    context.timer = new Timer();
 });

timer.after.each((context) => {
    context.clock.restore();
    context.setIntervalSpy.restore();
    context.timer = null;
})

timer('hides individual state props and exposes them through a state getter', ({ timer }) => {    
    // @ts-ignore
    const privateProp = timer['#isTimerActive'];
    const state = timer.state;

    const stateHasProp = (prop) => state.hasOwnProperty(prop)

    assert.is(privateProp, undefined);

    assert.is(stateHasProp('countDown'), true)
    assert.is(stateHasProp('input'), true)
    assert.is(stateHasProp('interval'), true)
    assert.is(stateHasProp('isTimerActive'), true)
    assert.is(stateHasProp('isTimeRemaining'), true)
});

timer('Start sets a new interval when input is passed', ({ timer, setIntervalSpy }) => {
    timer.start(1);

    assert.is(setIntervalSpy.called, true)
})

timer('Start does nothing if no input is passed', ({ timer, setIntervalSpy }) => {
    timer.start();

    assert.is(setIntervalSpy.called, false)
})
    
timer('Start does nothing if 0 is passed', ({ timer, setIntervalSpy }) => {
    timer.start(0);

    assert.is(setIntervalSpy.called, false)
})
        
timer('Start does nothing if there is an active interval', ({ timer, setIntervalSpy }) => {
    timer.start(1);

    assert.is(setIntervalSpy.called, true)

    timer.start(1);

    assert.is(setIntervalSpy.calledOnce, true)
})
        
timer('Start resumes from count down instead of starting from input if time is remaining', ({ timer, clock }) => {
    timer.start(10);

    assert.is(timer.state.countDown, 10)

    clock.tick(2000);

    timer.start(10)

    assert.is(timer.state.countDown, 8)
})

timer.run();
