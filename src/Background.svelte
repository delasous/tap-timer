<script>
	import browser from 'webextension-polyfill';
	import { onMount } from 'svelte';

	let port;
	// let _Timer;

	function connected(p) {
		port = p;
	
		console.log('connected to', p)
		// let Timer = _Timer ? _Timer : new Time;
		port.postMessage({ countDown });
	}

	onMount(async () => {
		browser.runtime.onConnect.addListener(connected);
	})
	
	let input;
	let countDown;
	let interval;
	let isTimerActive = false; 
	
	const stop = function() {
		clearInterval(interval);
		interval = null; 
	}
	
	// references to H, M, S ints of inputs which need to be cleared
	// also is resetting countDown to input necessary?
	const reset = function() {
		stop();
		H = M = S = 0; 
		countDown = input;
		isTimerActive = false;
	}
	
	window.start = function(_input) {
	
		console.log('starting', _input)
	
		input = _input;
		countDown = input;
		isTimerActive = true;
	
		interval = setInterval(() => {
			if (countDown === 0) {
				// end();
				stop();
				return;
			}
			countDown -= 1;

			// no port if popup is closed.
			// this mixes raw timer logic with specific messaging - can you pass 'messanger' as arg of setInterval?
			// import Timer class
			port.postMessage({ countDown })
	
			console.log(countDown)
		},1000);
	};
</script>