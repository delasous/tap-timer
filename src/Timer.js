class Timer {
	input;
	countDown;
	interval;
	isTimerActive = false; 

	port;

	constructor(port) {
		this.port = port;
	}

	// register the timer within a messanger obj?
	// port/messanger should track state of whether messanger is available or not
	notify() {
		const state = {
			input: this.input,
			countDown: this.countDown,
			interval: this.interval,
			isTimerActive: this.isTimerActive,
		}

		// not enough handle error "attemping to use disconnected port"
		// needs to be own object, and potensh listen for 'disconnected event'
		if (this.port) {
			this.port.postMessage({ msg: 'timer-state', state })		
		} 

		return;
	}
	
	stop() {
		clearInterval(interval);
		this.interval = null; 
	}
	
	// references to H, M, S ints of inputs needs to be cleared
	// nice to just use .notify(), can you reset individual fields in view
	reset() {
		stop();
		// H = M = S = 0; 

		// also is resetting countDown to input necessary / do anything here?
		// was important when in view
		this.countDown = this.input;
		this.isTimerActive = false;
	}
	
	start(input) {
	
		console.log('starting', input)
	
		this.input = input;
		this.countDown = this.input;
		this.isTimerActive = true;
	
		this.interval = setInterval(() => {
			if (this.countDown === 0) {
				// end();
				stop();
				return;
			}

			this.countDown -= 1;
			this.notify()
		}, 1000);
	};
}

const TimerSingleton = (() => {
	let instance;

	const createTimer = (port) => {
		return new Timer(port);
	}

	return {
		getInstance: (port) => {
			if (!instance) instance = createTimer(port)
			return instance;
		}
	};
})();

export default TimerSingleton