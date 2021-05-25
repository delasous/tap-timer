<script>
	import { createEventDispatcher } from 'svelte';

	import Editable from './Editable.svelte';
	import EditTime from './EditTime.svelte';
	import DisplayTime from './DisplayTime.svelte';

	let hours = '';
	let mins = '';
	let secs = '';
	
	let isTimerActive; 
  	let interval;	
	
	const hoursToSecs = (hours) => hours * 60 * 60;
	const minsToSecs = (mins) => mins * 60;

	$: input = hoursToSecs(hours) + minsToSecs(mins) + secs;
	$: countDown = input;
  	$: H = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
  	$: M = Math.floor((countDown % (60 * 60)) / (60));
  	$: S = Math.floor(countDown % (60));
	
	const dispatch = createEventDispatcher();
	
	const end = () => {
		dispatch('end', {
			isFinished: true,
			message: "Time's up!"
		})
	}
	
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

<style>
	button {
		font-size: 1rem;
		width: 35%;
		max-width: 200px;
		height: auto;
		font-family: 'Montserrat';
		font-weight: 700;
	}
</style>

<Editable isEditing={isTimerActive} >
	<svelte:fragment slot='edit'>
		<EditTime bind:hours bind:mins bind:secs />
	</svelte:fragment>
	<svelte:fragment slot='display'>
		<DisplayTime {H} {M} {S} />
	</svelte:fragment>
</Editable>

<div class='container'>
		<button on:click={start} disabled="{interval || input == 0}">Start</button>
	{#if interval}
		<button on:click={stop} disabled="{!interval}">Pause</button>
	{:else}
		<button 
			on:click={reset} 
			disabled="{interval || !input || (countDown === input)}"
		>Reset</button>
	{/if}
</div>	
