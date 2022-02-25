import { suite } from "uvu";
import * as assert from "uvu/assert";
import * as sinon from "sinon";

import Timer from "../TimerCore.js";

const timer = suite("Timer");

timer.before.each((context) => {
  const clock = sinon.useFakeTimers();

  context.clock = clock;
  context.setIntervalSpy = sinon.spy(clock, "setInterval");
  context.clearIntervalSpy = sinon.spy(clock, "clearInterval");
  context.timer = new Timer();
});

timer.after.each((context) => {
  context.clock.restore();
  context.setIntervalSpy.restore();
  context.timer = null;
});

timer(
  "hides individual state props and exposes them through a state getter",
  ({ timer }) => {
    // @ts-ignore
    const privateProp = timer["#isTimerActive"];
    const state = timer.state;

    const stateHasProp = (prop) => state.hasOwnProperty(prop);

    assert.is(privateProp, undefined);

    assert.is(stateHasProp("countDown"), true);
    assert.is(stateHasProp("input"), true);
    assert.is(stateHasProp("interval"), true);
    assert.is(stateHasProp("isTimerActive"), true);
    assert.is(stateHasProp("isTimeRemaining"), true);
  }
);

timer(
  "Start sets a new interval when input is passed",
  ({ timer, setIntervalSpy }) => {
    timer.start(1);

    assert.is(setIntervalSpy.called, true);
  }
);

timer(
  "Start does nothing if no input is passed",
  ({ timer, setIntervalSpy }) => {
    timer.start();

    assert.is(setIntervalSpy.called, false);
  }
);

timer("Start does nothing if 0 is passed", ({ timer, setIntervalSpy }) => {
  timer.start(0);

  assert.is(setIntervalSpy.called, false);
});

timer(
  "Start does nothing if there is an active interval",
  ({ timer, setIntervalSpy }) => {
    timer.start(1);

    assert.is(setIntervalSpy.called, true);

    timer.start(1);

    assert.is(setIntervalSpy.calledOnce, true);
  }
);

timer(
  "Start resumes from count down instead of starting from input if time is remaining",
  ({ timer, clock }) => {
    timer.start(10);

    assert.is(timer.state.countDown, 10);

    clock.tick(2000);

    timer.start(10);

    assert.is(timer.state.countDown, 8);
  }
);

timer(
  "Pause does nothing if there isnt an active interval",
  ({ timer, setIntervalSpy }) => {
    assert.is(setIntervalSpy.calledOnce, false);

    timer.pause();

    assert.is(setIntervalSpy.calledOnce, false);
  }
);

timer(
  "Pause clears the interval if the timer is active, and sets isTimerActive to false",
  ({ timer, setIntervalSpy, clearIntervalSpy }) => {
    timer.start(1);

    assert.is(setIntervalSpy.calledOnce, true);

    timer.pause();

    assert.is(clearIntervalSpy.calledOnce, true);
    assert.is(timer.state.isTimerActive, false);
  }
);

timer(
  "Reset clears interval and restores null/false state",
  ({ timer, clearIntervalSpy }) => {
    timer.reset();

    assert.is(clearIntervalSpy.calledOnce, true);

    assert.is(timer.state.interval, null);
    assert.is(timer.state.isTimerActive, false);
    assert.is(timer.state.countDown, undefined);
    assert.is(timer.state.input, null);
    assert.is(timer.state.isTimeRemaining, false);
  }
);

timer(
  "Reset assigns previous input to 'countDown' if it has been defined",
  ({ timer }) => {
    timer.start(1);
    timer.reset();

    assert.is(timer.state.countDown, 1);
    assert.is(timer.state.input, null);
  }
);

timer(
  "End clears interval, sets isTimerActive to false, and zero's input",
  ({ timer, clearIntervalSpy }) => {
    timer.end();

    assert.is(clearIntervalSpy.calledOnce, true);

    assert.is(timer.state.isTimerActive, false);
    assert.is(timer.state.input, 0);
  }
);

timer("Start emits a 'start' event with state arg", ({ timer }) => {
  const spy = sinon.spy();
  timer.on("start", spy);

  timer.start(1);

  assert.is(spy.calledOnce, true);
  assert.is(spy.args.length, 1);

  timer.removeListener("start", spy);
});

timer("Pause emits a 'pause' event with state arg", ({ timer }) => {
  const spy = sinon.spy();
  timer.on("pause", spy);

  timer.start(1);
  timer.pause();

  assert.is(spy.calledOnce, true);
  assert.is(spy.args.length, 1);

  timer.removeListener("pause", spy);
});

timer("Reset emits a 'reset' event with state arg", ({ timer }) => {
  const spy = sinon.spy();
  timer.on("reset", spy);

  timer.start(1);
  timer.reset();

  assert.is(spy.calledOnce, true);
  assert.is(spy.args.length, 1);

  timer.removeListener("reset", spy);
});

timer("End emits an 'end' event with state arg", ({ timer }) => {
  const spy = sinon.spy();
  timer.on("end", spy);

  timer.end();

  assert.is(spy.calledOnce, true);
  assert.is(spy.args.length, 1);

  timer.removeListener("end", spy);
});

timer("Emits 'count' event on tick with state arg", ({ timer, clock }) => {
  const spy = sinon.spy();
  timer.on("count", spy);

  timer.start(10);
  clock.tick(1000);

  assert.is(spy.calledOnce, true);

  timer.removeListener("state", spy);
});

timer.run();
