<script>
	import browser from 'webextension-polyfill';

	import toggleIcon from './utils/toggleIcon';
	import endStrats from './utils/endStrategies';

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

			toggleIcon(T.interval)
		}

		const removeActions = () => {
			T.messanger = undefined;
			port.onMessage.removeListener(fireActions)
			port.onDisconnect.removeListener(removeActions)
		}
		
		port.onMessage.addListener(fireActions)
		port.onDisconnect.addListener(removeActions)
	}

	async function hotKeys(cmd) {
		T = Timer.getInstance();
		T.endStrategy = endStrats[0]; 

		// not optimal - just test.
		const { hotStart1 } = await browser.storage.sync.get('hotStart1')

		if (cmd === 'hot-start-1') T.start(hotStart1 * 60);
		if (cmd === 'hot-start-2') T.start();
		if (cmd === 'hot-pause') T.pause();
		if (cmd === 'hot-reset') T.reset();
		
		toggleIcon(T.interval)
	}

	browser.runtime.onConnect.addListener(connectToAppPort);
	browser.commands.onCommand.addListener(hotKeys)

	browser.runtime.onSuspend.removeListener(connectToAppPort);
	browser.runtime.onSuspend.removeListener(hotKeys);
</script>
