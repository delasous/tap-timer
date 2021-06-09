<script>
	import browser from 'webextension-polyfill';

	import Timer from './Timer';

	// currently not used outside of 'connected'
	let port;
	let T;

	function connected(p) {
		port = p;
			
		T = Timer.getInstance(port);

		T.notify();

		port.onMessage.addListener(({ msg, input }) => {
			if (msg === 'start-timer') T.start(input);

			if (msg === 'stop-timer') T.stop();
			if (msg === 'reset-timer') T.reset();

			return;
		})
	}

	browser.runtime.onConnect.addListener(connected);
</script>