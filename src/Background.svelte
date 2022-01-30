<script>
	import browser from 'webextension-polyfill';

	import toggleIcon from './utils/toggleIcon';
	import endStrats from './utils/endStrategies';

	import Timer from './Timer';

	let port;
	let T;

	let settings = {
		hotStart1: 0,
		hotStart2: 0
	}
	
	function connectToAppPort (p) {
		port = p;
			
		T = Timer.getInstance();

		T.on('state', function(state) {
			if (port) {
				port.postMessage({ msg: 'fire-state', ...state });
			};
			return;
		}); 

		T.on('end', function() {
			return endStrats[0].run(this.interval); // hardcoded to draft; set from UI settings page.
		});

		T.emitState();

		const fireActions = ({ msg, input }) => {
			if (msg === 'fire-start') T.start(input);
			if (msg === 'fire-pause') T.pause();
			if (msg === 'fire-reset') T.reset();

			toggleIcon(T.interval);
		}

		const removeActions = () => {
			port.onMessage.removeListener(fireActions);
			port.onDisconnect.removeListener(removeActions);
			port = null; 
		}
		
		port.onMessage.addListener(fireActions);
		port.onDisconnect.addListener(removeActions);
	}

	function hotKeys(cmd) {
		T = Timer.getInstance();

		// TODO: warning if hotStart value isnt set?
		if (cmd === 'hot-start-1' && settings.hotStart1 ) T.start(settings.hotStart1 * 60);
		if (cmd === 'hot-start-2' && settings.hotStart2 ) T.start(settings.hotStart2 * 60);
		if (cmd === 'hot-pause') T.pause();
		if (cmd === 'hot-reset') T.reset();
		
		toggleIcon(T.interval)
	}

	function handleStorageChange(changes, area) {
		if(changes.hotStart1) {
			settings.hotStart1 = changes.hotStart1.newValue;
		} else if (changes.hotStart2) {
			settings.hotStart2 = changes.hotStart2.newValue;
		} else {
			return;
		}
	}

	browser.runtime.onConnect.addListener(connectToAppPort);
	browser.commands.onCommand.addListener(hotKeys);
	browser.storage.onChanged.addListener(handleStorageChange);

	browser.runtime.onSuspend.removeListener(connectToAppPort);
	browser.runtime.onSuspend.removeListener(hotKeys);
	browser.runtime.onSuspend.removeListener(handleStorageChange);
</script>
