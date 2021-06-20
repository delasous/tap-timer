class Timer {
	input;
	countDown;
	isTimerActive = false; 
	isTimeRemaining = false;

	interval;

	messanger;

	set messanger(messanger) {
		this.messanger = messanger
	}

	notifyState() {
		// recreates state every pass 
		let countDown = this.countDown;
		let	interval = this.interval;
	    let isTimerActive = this.isTimerActive;
		let isTimeRemaining = this.isTimeRemaining;
	
		if (this.messanger) this.messanger.postMessage({ msg: 'timer-state', countDown, interval, isTimerActive, isTimeRemaining })		
	}
	
	stop() {
		clearInterval(this.interval);
		this.interval = null;
		this.isTimerActive = false;
		this.notifyState() 
	}
	
	reset() {
		this.stop();
		this.countDown = this.input;
		this.isTimeRemaining = false;
		this.notifyState()
	}
	
	start(input) {	
		this.input = input;
		this.countDown = this.isTimeRemaining ? this.countDown : this.input;
		this.isTimerActive = true;
		this.isTimeRemaining = true;
	
		this.interval = setInterval(() => {
			if (this.countDown === 0) {
				// end(); // fires end strategy
				this.stop();
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