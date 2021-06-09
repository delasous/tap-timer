class Timer {
	input;
	countDown;
	interval;
	isTimerActive = false; 

	messanger;

	set messanger(messanger) {
		this.messanger = messanger
	}

	notifyState() {
		// recreates state every pass 
		const state = {
			countDown: this.countDown,
			interval: this.interval,
			isTimerActive: this.isTimerActive,
		}

		if (this.messanger) this.messanger.postMessage({ msg: 'timer-state', state })		
	}
	
	stop(interval) {
		clearInterval(interval);
		this.interval = null;
		this.notifyState() 
	}
	
	reset() {
		stop();
		this.countDown = this.input;
		this.isTimerActive = false;
		this.notifyState()
	}
	
	start(input) {	
		this.input = input;
		this.countDown = this.input;
		this.isTimerActive = true;
	
		this.interval = setInterval(() => {
			if (this.countDown === 0) {
				// end(); // fires end strategy
				stop();
				return;
			}

			this.countDown -= 1;
			this.notifyState()
		}, 1000);
	};
}

const TimerSingleton = (() => {
	let instance;

	return {
		getInstance: () => {
			if (!instance) instance = new Timer();
			return instance;
		}
	};
})();

export default TimerSingleton;