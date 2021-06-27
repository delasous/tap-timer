<script>
	import browser from 'webextension-polyfill';
	import { onMount } from 'svelte';

	import Timer from './TimerView.svelte';

	let _countDown;
	let _interval;
	let _isTimerActive;
	let _isTimeRemaining;
	let port;

	let start = (input) => port.postMessage({ msg: 'fire-start', input });
	let pause = () => port.postMessage({ msg: 'fire-pause' });
	let reset = () => port.postMessage({ msg: 'fire-reset' });

	onMount(async () => {
		port = browser.runtime.connect({ name: 'background-port' });

		port.onMessage.addListener(({ msg, countDown, interval, isTimerActive, isTimeRemaining }) => {
			if (msg === 'fire-state') {
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
	{pause}
	{reset}
/>
