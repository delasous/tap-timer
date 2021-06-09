<script>
	import browser from 'webextension-polyfill';
	import { onMount } from 'svelte';

	import Timer from './TimerView.svelte';

	let _port;
	let _countDown;
	let _interval;
	let _isTimerActive;

	// pass as events to Timer?
	let start = (input) => _port.postMessage({ msg: 'start-timer', input });
	// let stop
	// let reset

	onMount(async () => {
		_port = browser.runtime.connect({ name: 'background-timer-port' });

		_port.onMessage.addListener(({ countDown, interval, isTimerActive }) => {
			_interval = interval
			_isTimerActive = isTimerActive;
			_countDown = countDown;
		})
	})

	_port && _port.onMessage.addListener(({ countDown }) => {
		_countDown = countDown;
	})
</script>

<Timer 
	{start}
	countDown={_countDown}
/>