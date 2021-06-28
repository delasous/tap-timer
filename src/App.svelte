<script>
	import browser from 'webextension-polyfill';
	import { onMount, onDestroy } from 'svelte';

	import Timer from './TimerView.svelte';

	let _countDown;
	let _input;
	let _interval;
	let _isTimerActive;
	let _isTimeRemaining;
	let port;

	let start = (input) => port.postMessage({ msg: 'fire-start', input });
	let pause = () => port.postMessage({ msg: 'fire-pause' });
	let reset = () => port.postMessage({ msg: 'fire-reset' });

	function connectToBackgroundPort({ msg, countDown, interval, isTimerActive, isTimeRemaining, input }) {
		if (msg === 'fire-state') {
			_countDown = countDown;
			_interval = interval;
			_isTimerActive = isTimerActive;
			_isTimeRemaining = isTimeRemaining;
			_input = input;
		}
	}

	onMount(async() => {
		port = browser.runtime.connect({ name: 'background-port' });
		port.onMessage.addListener(connectToBackgroundPort)
	})

	onDestroy(async() => port.onMessage.removeListener(connectToBackgroundPort))
</script>

<Timer 
	countDown={_countDown}
	interval={_interval}
	isTimerActive={_isTimerActive}
	isTimeRemaining={_isTimeRemaining}
	{_input}
	{start}
	{pause}
	{reset}
/>
