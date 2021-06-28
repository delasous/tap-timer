<script>
	import browser from 'webextension-polyfill';

	import endStrats from './endStrategies';
	import Timer from './Timer';

	let port;
	let T;
	let activeIcon = false;

	function toggleIcon() {
		activeIcon = !activeIcon;
		let icon = activeIcon ? { 19: "star-filled-19.png" } :  { 19: "star-empty-19.png" }

		browser.browserAction.setIcon({
			path: icon,
		})
	}

	function start(input) {
		toggleIcon();
		T.start(input);
	}

	function pause() {
		toggleIcon();
		T.pause();
	}

	function reset() { 
		T.reset() 
	};

	function connectToAppPort (p) {
		port = p;
			
		T = Timer.getInstance();

		T.messanger = port
		T.endStrategy = endStrats[0]; // hardcoded to draft; set from UI settings page.

		T.notifyState();

		const fireActions = ({ msg, input }) => {
			if (msg === 'fire-start') start(input);
			if (msg === 'fire-pause') pause();
			if (msg === 'fire-reset') reset();
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

		if (cmd === 'hot-start-20') start(1200);
		if (cmd === 'hot-start-10') start(600);
		if (cmd === 'hot-pause') pause();
		if (cmd === 'hot-reset') reset();
	}

	browser.runtime.onConnect.addListener(connectToAppPort);
	browser.commands.onCommand.addListener(hotKeys)

	browser.runtime.onSuspend.removeListener(connectToAppPort);
	browser.runtime.onSuspend.removeListener(hotKeys);
</script>
