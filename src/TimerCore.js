import EventEmitter from 'events';

class Timer extends EventEmitter {
	#countDown;
	#input;
	#interval;
	#isTimerActive;
	#isTimeRemaining;

	constructor() {
		super();
		this.#isTimerActive = false;
		this.#isTimeRemaining = false;
	}

	get state() {
		return { 
			countDown: this.#countDown, 
			input: this.#input,
			interval: this.#interval, 
			isTimerActive: this.#isTimerActive, 
			isTimeRemaining: this.#isTimeRemaining, 
		};
	}

	#emitState() {
		this.emit('state', this.state);		
	}
	
	pause() {
		if(!this.#interval) return;

		clearInterval(this.#interval);
		this.#interval = null;
		this.#isTimerActive = false;

		this.emit('pause'); 
		this.#emitState();
	}
	
	reset() {
		clearInterval(this.#interval);
		this.#interval = null;
		this.#isTimerActive = false;
		this.#countDown = this.#input;
		this.#input = null;
		this.#isTimeRemaining = false;

		this.emit('reset');
		this.#emitState();
	}

	end() {
		clearInterval(this.#interval);
		this.#interval = null;
		this.#isTimerActive = false;
		this.#input = 0;
		
		this.emit('end', this.state)
	}
	
	start(input) {
		if (this.#interval || !input || input == 0) return;
		
		this.#input = input;
		this.#countDown = this.#isTimeRemaining ? this.#countDown : input;

		this.#isTimerActive = true;
		this.#isTimeRemaining = true;

		this.emit('start', this.state);
	
		this.#interval = setInterval(() => {
			if (this.#countDown === 0) {
				this.end(); 
				return;
			}
			this.#countDown -= 1;
			this.#emitState()
		}, 1000);
	};
}

export default Timer;
