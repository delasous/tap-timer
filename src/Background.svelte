<script>
	import browser from 'webextension-polyfill';

	import Timer from './Timer';

	let port;
	let T;

	const connected = (p) => {
		port = p;
			
		T = Timer.getInstance();

		T.messanger = port
		T.notifyState();

		port.onMessage.addListener(({ msg, input }) => {
			if (msg === 'start-timer') T.start(input);
			if (msg === 'stop-timer') T.stop();
			if (msg === 'reset-timer') T.reset();
			return;
		})

		port.onDisconnect.addListener(() => T.messanger = undefined)
	}

	browser.runtime.onConnect.addListener(connected);
</script>