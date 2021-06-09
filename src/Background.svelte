<script>
	import browser from 'webextension-polyfill';

	import Timer from './Timer';

	// currently not used outside of 'connected'
	let port;
	let T;

	function connected(p) {
		port = p;
			
		T = Timer.getInstance(port);

		let { 
			countDown,
			interval,
			isTimerActive
		} = T

		// this is only initial state of timer
		// if Timer changes, it needs to post message of updated variable state.
		port.postMessage({ countDown, interval, isTimerActive });

		port.onMessage.addListener(({ msg, input }) => {
			if (msg === 'start-timer') T.start(input);

			// if (msg === 'stop-timer') T.stop(input);
			// if (msg === 'reset-timer') T.reset(input);

			return;
		})
	}

	browser.runtime.onConnect.addListener(connected);
</script>