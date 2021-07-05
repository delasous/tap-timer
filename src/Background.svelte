<script>
	import browser from 'webextension-polyfill';

	import endStrats from './endStrategies';
	import Timer from './Timer';

	let port;
	let T;
	
	function connectToAppPort (p) {
		port = p;
			
		T = Timer.getInstance();

		T.messanger = port
		T.endStrategy = endStrats[0]; // hardcoded to draft; set from UI settings page.

		T.notifyState();

		const fireActions = ({ msg, input }) => {
			if (msg === 'fire-start') T.start(input);
			if (msg === 'fire-pause') T.pause();
			if (msg === 'fire-reset') T.reset();
		}

		const removeActions = () => {
			T.messanger = undefined;
			port.onMessage.removeListener(fireActions)
			port.onDisconnect.removeListener(removeActions)
		}
		
		port.onMessage.addListener(fireActions)
		port.onDisconnect.addListener(removeActions)
	}

	function hotKeys(cmd) {
		T = Timer.getInstance();
		T.endStrategy = endStrats[0]; 

		if (cmd === 'hot-start-40') T.start();
		if (cmd === 'hot-start-20') T.start(1200);
		if (cmd === 'hot-pause') T.pause();
		if (cmd === 'hot-reset') T.reset();
	}

	browser.runtime.onConnect.addListener(connectToAppPort);
	browser.commands.onCommand.addListener(hotKeys)

	browser.runtime.onSuspend.removeListener(connectToAppPort);
	browser.runtime.onSuspend.removeListener(hotKeys);
</script>
