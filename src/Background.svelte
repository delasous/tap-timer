<script>
	import browser from 'webextension-polyfill';

	import endStrats from './endStrategies';
	import Timer from './Timer';

	let port;
	let T;

	const connected = (p) => {
		port = p;
			
		T = Timer.getInstance();

		T.messanger = port
		T.notifyState();

		T.endStrategy = endStrats[0];

		port.onMessage.addListener(({ msg, input }) => {
			if (msg === 'fire-start') T.start(input);
			if (msg === 'fire-pause') T.pause();
			if (msg === 'fire-reset') T.reset();
			return;
		})

		port.onDisconnect.addListener(() => T.messanger = undefined)
	}

	browser.runtime.onConnect.addListener(connected);
</script>
