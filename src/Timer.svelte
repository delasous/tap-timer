<script>
	// import { createEventDispatcher } from 'svelte';
	//const dispatch = createEventDispatcher();
	// const end = () => {
	// 	dispatch('end', {
	// 		isFinished: true,
	// 		message: "Time's up!"
	// 	})
	// }

	import { onMount } from 'svelte';
	import browser from 'webextension-polyfill';

	let App = {};

	onMount(async () => {
		App = browser.windows.getAll({ windowTypes: ['popup'] })[0]

		console.log(App)
	})
	
	let { input } = App;
	$: countDown = input;

	let isTimerActive; 
  	let interval;	
	
	const stop = () => {
		clearInterval(interval);
		interval = null; 
	}
	
	const reset = () => {
		stop();
		H = M = S = 0; 
		countDown = input;
		isTimerActive = false;
	}
	
	const start = () => {
		isTimerActive = true;
    	interval = setInterval(() => {
			if (countDown === 0) {
				end();
				stop();
				return;
			}
      		countDown -= 1;
    	},1000);
  	};
</script>
