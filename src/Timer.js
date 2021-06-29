class Timer {
	countDown;
	input;
	interval;
	isTimerActive = false; 
	isTimeRemaining = false;

	messanger;
	endStrategy = {
		display: 'Default',
		name: 'default',
		config: {},
		run: async () => console.log('Timer has ended.')
	};

	set messanger(messanger) {
		this.messanger = messanger
	}

	set endStategy(endStrategy) {
		this.endStategy = endStrategy
	}

	notifyState() {
		// recreates state every pass 
		let countDown = this.countDown;
		let	interval = this.interval;
	    let isTimerActive = this.isTimerActive;
		let isTimeRemaining = this.isTimeRemaining;
		let input = this.input;
	
		if (this.messanger) this.messanger.postMessage({ msg: 'fire-state', countDown, interval, isTimerActive, isTimeRemaining, input })		
	}
	
	pause() {
		if(!this.interval) return;

		clearInterval(this.interval);
		this.interval = null;
		this.isTimerActive = false;
		this.notifyState() 
	}
	
	// notifies state twice.
	reset() {
		this.pause();
		this.countDown = this.input;
		this.input = null;
		this.isTimeRemaining = false;
		this.notifyState()
	}

	// run is async!
	end() {
		this.reset();
		this.endStrategy.run()
	}
	
	start(input) {
		if (this.interval) return;
		
		this.input = input;
		this.countDown = this.isTimeRemaining ? this.countDown : this.input;
		this.isTimerActive = true;
		this.isTimeRemaining = true;
	
		this.interval = setInterval(() => {
			if (this.countDown === 0) {
				this.end(); 
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
