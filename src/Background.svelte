<script>
	import browser from 'webextension-polyfill';
	import { onMount } from 'svelte';

	import toggleIcon from './utils/toggleIcon';
	import endStrats from './utils/endStrategies';
	import Timer from './TimerCore';

	let timer = new Timer();

	let settings = {
		hotStart1: 0,
		hotStart2: 0,
		endStratsConfig: []
	}
	
	onMount(async ()  => {
        const keys = await browser.storage.sync.get(['hotStart1', 'hotStart2', 'endStratsConfig']);
        
        settings.hotStart1 = keys.hotStart1;
        settings.hotStart2 = keys.hotStart2;

		if(keys.endStratsConfig) {
			settings.endStratsConfig = keys.endStratsConfig;
		} else {
			const defaultEndStratConfig = endStrats.map(({ id, description, display }) => ({ id, description, display, isActive: true }));

			settings.endStratsConfig = defaultEndStratConfig;
			browser.storage.sync.set({ ["endStratsConfig"]: settings.endStratsConfig });
		}
    })

	function handleAppPortConnect(port) {
		port.postMessage({ msg: 'fire-state', ...timer.state })
		
		function handleActions({ msg, input }) {
			if (msg === 'fire-start') timer.start(input);
			if (msg === 'fire-pause') timer.pause();
			if (msg === 'fire-reset') timer.reset();

			toggleIcon(timer.interval);
		}

		function handleState(state) {
			port.postMessage({ msg: 'fire-state', ...state });
		}

		timer.on('count', handleState); 
		timer.on('start', handleState); 
		timer.on('pause', handleState); 
		timer.on('reset', handleState); 

		port.onMessage.addListener(handleActions);

		function cleanup() {
			timer.removeListener('count', handleState);
			timer.removeListener('start', handleState);
			timer.removeListener('pause', handleState);
			timer.removeListener('reset', handleState);
			port.onMessage.removeListener(handleActions);
			port.onDisconnect.removeListener(cleanup);
		}
		
		port.onDisconnect.addListener(cleanup);
	}

	function handleHotKeys(cmd) {
		// TODO: warning if hotStart value isnt set?
		if (cmd === 'hot-start-1' && settings.hotStart1 ) timer.start(settings.hotStart1 * 60);
		if (cmd === 'hot-start-2' && settings.hotStart2 ) timer.start(settings.hotStart2 * 60);
		if (cmd === 'hot-pause') timer.pause();
		if (cmd === 'hot-reset') timer.reset();
		
		toggleIcon(timer.interval)
	}

	function handleStorageChange(changes, area) {
		if(changes.hotStart1) {
			settings.hotStart1 = changes.hotStart1.newValue;
		} else if (changes.hotStart2) {
			settings.hotStart2 = changes.hotStart2.newValue;
		} else if (changes.endStratsConfig) {
			settings.endStratsConfig = changes.endStratsConfig.newValue;
		} else {
			return;
		}
	}

	function handleTimerEnd(state) {
		return endStrats.forEach((strat, ix) => {
			if(settings.endStratsConfig[ix].isActive) {
				strat.run(state.interval);
			} else {
				return;
			}
		}); 
	}

	timer.on('end', handleTimerEnd)

	browser.runtime.onConnect.addListener(handleAppPortConnect);
	browser.commands.onCommand.addListener(handleHotKeys);
	browser.storage.onChanged.addListener(handleStorageChange);

	function cleanup() {
		timer.removeListener('end', handleTimerEnd)
		browser.runtime.onConnect.removeListener(handleAppPortConnect);
		browser.commands.onCommand.removeListener(handleHotKeys);
		browser.storage.onChanged.removeListener(handleStorageChange);
		browser.runtime.onSuspend.removeListener(cleanup);
	}

	browser.runtime.onSuspend.addListener(cleanup);
</script>
