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

	pause() {
		if(!this.#interval) return;

		clearInterval(this.#interval);
		this.#interval = null;
		this.#isTimerActive = false;

		this.emit('pause', this.state); 
	}
	
	reset() {
		clearInterval(this.#interval);
		this.#interval = null;
		this.#isTimerActive = false;
		this.#countDown = this.#input;
		this.#input = null;
		this.#isTimeRemaining = false;

		this.emit('reset', this.state);
	}

	end() {
		clearInterval(this.#interval);
		this.#interval = null;
		this.#isTimerActive = false;
		this.#input = 0;
		
		this.emit('end', this.state);
		this.reset();
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
			this.emit('count', this.state)
		}, 1000);
	};
}

export default Timer;
