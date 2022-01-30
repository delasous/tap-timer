import EventEmitter from 'events'

class Timer extends EventEmitter {
	countDown;
	input;
	interval;
	isTimerActive = false; 
	isTimeRemaining = false;

	emitState() {
		// recreates state every pass 
		let countDown = this.countDown;
		let	interval = this.interval;
	    let isTimerActive = this.isTimerActive;
		let isTimeRemaining = this.isTimeRemaining;
		let input = this.input;
	
		this.emit('state', { countDown, interval, isTimerActive, isTimeRemaining, input });		
	}
	
	pause() {
		if(!this.interval) return;

		clearInterval(this.interval);
		this.interval = null;
		this.isTimerActive = false;

		this.emitState();
		this.emit('pause'); 
	}
	
	reset() {
		clearInterval(this.interval);
		this.interval = null;
		this.isTimerActive = false;
		this.countDown = this.input;
		this.input = null;
		this.isTimeRemaining = false;

		this.emitState();
		this.emit('reset');
	}

	end() {
		clearInterval(this.interval);
		this.interval = null;
		this.isTimerActive = false;
		this.input = 0;
		
		this.emit('end')
	}
	
	start(input) {
		if (this.interval) return;
		
		this.input = input;
		this.countDown = this.isTimeRemaining ? this.countDown : this.input;
		this.isTimerActive = true;
		this.isTimeRemaining = true;

		this.emit('start');
	
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
