<script>
	import browser from 'webextension-polyfill';
	import { onMount } from 'svelte';

	import Timer from './TimerView.svelte';

	let _countDown;
	let _interval;
	let _isTimerActive;
	let _isTimeRemaining;
	let port;

	// pass as events to Timer?
	let start = (input) => port.postMessage({ msg: 'start-timer', input });
	let stop = () => port.postMessage({ msg: 'stop-timer' });
	let reset = () => port.postMessage({ msg: 'reset-timer' });

	onMount(async () => {
		port = browser.runtime.connect({ name: 'background-timer-port' });

		port.onMessage.addListener(({ msg, countDown, interval, isTimerActive, isTimeRemaining }) => {
			if (msg === 'timer-state') {
				_countDown = countDown;
				_interval = interval;
				_isTimerActive = isTimerActive;
				_isTimeRemaining = isTimeRemaining;
			}
			return;
		})
	})
</script>

<Timer 
	countDown={_countDown}
	interval={_interval}
	isTimerActive={_isTimerActive}
	isTimeRemaining={_isTimeRemaining}
	{start}
	{stop}
	{reset}
/>