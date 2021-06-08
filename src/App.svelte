<script>
	import browser from 'webextension-polyfill';
	import { onMount } from 'svelte';

	import Timer from './Timer.svelte';

	let _port;
	let _start;
	let _countDown;

	onMount(async () => {
		_port = browser.runtime.connect({ name: 'background-timer-port' });

		_port.onMessage.addListener(({ countDown }) => {
			// T = Timer
			_countDown = countDown;
		})

		const BackgroundWindow = browser.extension.getBackgroundPage()

		_start = BackgroundWindow.start
	})

	_port && _port.onMessage.addListener(({ countDown }) => {
		_countDown = countDown;
	})

	// pass functions as events?
</script>

<Timer 
	start={_start}
	countDown={_countDown}
/>