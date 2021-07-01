<script>
	import browser from 'webextension-polyfill';

	import endStrats from './endStrategies';
	import Timer from './Timer';

	let port;
	let T;

	function toggleIcon({ interval }) {
		let icon = interval ? { 16: "icon-active-19.png" } :  { 16: "icon-inactive-19.png" }

		browser.browserAction.setIcon({
			path: icon,
		})
	}

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
			toggleIcon(T)
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

		if (cmd === 'hot-start-30') T.start(1800);
		if (cmd === 'hot-start-20') T.start(1200);
		if (cmd === 'hot-start-10') T.start(600);
		if (cmd === 'hot-pause') T.pause();
		if (cmd === 'hot-reset') T.reset();
		toggleIcon(T)
	}

	browser.runtime.onConnect.addListener(connectToAppPort);
	browser.commands.onCommand.addListener(hotKeys)

	browser.runtime.onSuspend.removeListener(connectToAppPort);
	browser.runtime.onSuspend.removeListener(hotKeys);
</script>
