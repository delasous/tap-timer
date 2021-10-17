<script>
	import browser from 'webextension-polyfill';

	import toggleIcon from './utils/toggleIcon';
	import endStrats from './utils/endStrategies';

	import Timer from './Timer';

	let port;
	let T;

	let hotStart1 = 0;
	let hotStart2 = 0;
	
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

	function hotKeys(cmd) {
		T = Timer.getInstance();
		T.endStrategy = endStrats[0]; 

		// TODO: warning if hotStart value isnt set?
		if (cmd === 'hot-start-1') T.start(hotStart1 * 60);
		if (cmd === 'hot-start-2') T.start(hotStart2 * 60);
		if (cmd === 'hot-pause') T.pause();
		if (cmd === 'hot-reset') T.reset();
		
		toggleIcon(T.interval)
	}

	function handleStorageChange(changes, area) {
		hotStart1 = changes.hotStart1.newValue;
		hotStart2 = changes.hotStart2.newvalue;
	}

	browser.runtime.onConnect.addListener(connectToAppPort);
	browser.commands.onCommand.addListener(hotKeys)
	browser.storage.onChanged.addListener(handleStorageChange);

	browser.runtime.onSuspend.removeListener(connectToAppPort);
	browser.runtime.onSuspend.removeListener(hotKeys);
	browser.runtime.onSuspend.removeListener(handleStorageChange);
</script>
