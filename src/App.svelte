<script>
	import browser from 'webextension-polyfill';
	import { onMount } from 'svelte';

	import Timer from './TimerView.svelte';

	let timerState;
	let port;

	// pass as events to Timer?
	let start = (input) => port.postMessage({ msg: 'start-timer', input });
	let stop = (interval) => port.postMessage({ msg: 'stop-timer', interval });
	let reset = () => port.postMessage({ msg: 'reset-timer' });

	onMount(async () => {
		port = browser.runtime.connect({ name: 'background-timer-port' });

		port.onMessage.addListener(({ msg, state }) => {
			if (msg === 'timer-state') timerState = state;
			return;
		})
	})
</script>

<Timer 
	{...timerState}
	{start}
	{stop}
	{reset}
/>