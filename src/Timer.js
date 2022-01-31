import EventEmitter from 'events'

class Timer extends EventEmitter {
	countDown;
	input;
	interval;
	isTimerActive = false; 
	isTimeRemaining = false;

	get state() {
		return { 
			countDown: this.countDown, 
			interval: this.interval, 
			isTimerActive: this.isTimerActive, 
			isTimeRemaining: this.isTimeRemaining, 
			input: this.input
		};
	}

	emitState() {
		this.emit('state', this.state);		
	}
	
	pause() {
		if(!this.interval) return;

		clearInterval(this.interval);
		this.interval = null;
		this.isTimerActive = false;

		this.emitState();
		this.emit('pause', this.state); 
	}
	
	reset() {
		clearInterval(this.interval);
		this.interval = null;
		this.isTimerActive = false;
		this.countDown = this.input;
		this.input = null;
		this.isTimeRemaining = false;

		this.emitState();
		this.emit('reset', this.state);
	}

	end() {
		clearInterval(this.interval);
		this.interval = null;
		this.isTimerActive = false;
		this.input = 0;
		
		this.emit('end', this.state)
	}
	
	start(input) {
		if (this.interval) return;
		
		this.input = input;
		this.countDown = this.isTimeRemaining ? this.countDown : this.input;
		this.isTimerActive = true;
		this.isTimeRemaining = true;

		this.emit('start', this.state);
	
		this.interval = setInterval(() => {
			if (this.countDown === 0) {
				this.end(); 
				return;
			}

			this.countDown -= 1;
			this.emitState()
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
