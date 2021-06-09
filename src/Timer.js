class Timer {
	input;
	countDown;
	interval;
	isTimerActive = false; 
	port;

	constructor(port) {
		this.port = port;
	}
	
	stop() {
		clearInterval(interval);
		this.interval = null; 
	}
	
	// references to H, M, S ints of inputs which need to be cleared
	// also is resetting countDown to input necessary?
	reset() {
		stop();
		// H = M = S = 0; 
		this.countDown = this.input;
		this.isTimerActive = false;
	}
	
	start(_input) {
	
		console.log('starting', _input)
	
		this.input = _input;
		this.countDown = this.input;
		this.isTimerActive = true;
	
		this.interval = setInterval(() => {
			if (this.countDown === 0) {
				// end();
				stop();
				return;
			}
			this.countDown -= 1;

			// no port if popup is closed.
			// this mixes raw timer logic with specific messaging - can you pass 'messanger' as arg of setInterval?
			// import Timer class
			// needs to pass entire state {} of Timer every time there is a change
			this.port.postMessage({ countDown: this.countDown })
		},1000);
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