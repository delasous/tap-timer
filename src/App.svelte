<script>
	import browser from 'webextension-polyfill';
	import { onMount } from 'svelte';

	import Timer from './TimerView.svelte';

	let input;
	let countDown;
	let interval;
	let isTimerActive;

	// pass as events to Timer?
	let start = (input) => port.postMessage({ msg: 'start-timer', input });
	let stop = () => port.postMessage({ msg: 'stop-timer', input });
	let reset = () => port.postMessage({ msg: 'reset-timer', input });

	let port;
	// have to check ports connected here too?
	onMount(async () => {
		port = browser.runtime.connect({ name: 'background-timer-port' });

		port.onMessage.addListener(({ msg, state }) => {
			if (msg === 'timer-state') {
				input = state.input
				countDown = state.countDown;
				interval = state.interval
				isTimerActive = state.isTimerActive;
			}
			return;
		})
	})
</script>

<Timer 
	{input}
	{countDown}
	{interval}
	{isTimerActive}
	{start}
	{stop}
	{reset}
/>