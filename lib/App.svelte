<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import browser from 'webextension-polyfill';

	import Editable from './Editable.svelte';
	import EditTime from './EditTime.svelte';
	import DisplayTime from '../src/DisplayTime.svelte';

	let Timer = browser.extension.getBackgroundPage();

	let { 
		countDown,
		isTimerActive, 
		interval, 
		stop, 
		start, 
		reset 
	} = t;

	let hours = '';
	let mins = '';
	let secs = '';

	const hoursToSecs = (hours) => hours * 60 * 60;
	const minsToSecs = (mins) => mins * 60;

	$: input = hoursToSecs(hours) + minsToSecs(mins) + secs;

	$: H = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
  	$: M = Math.floor((countDown % (60 * 60)) / (60));
  	$: S = Math.floor(countDown % (60));
	
	console.log(countDown)
	console.log(isTimerActive)
	console.log(interval)

	// incorporate selected endStrategy
	// const handleEnd = (e) => {
	// 	if (e.detail.isFinished === true) {
	// 		alert(e.detail.message);
	// 	}
	// }
</script>

<style>
	:global(.container) {
			height: 100%;
			width: 75%;
			margin: 5px 0;
			display: flex;
			justify-content: center;
	}

	:global(.time) {
		font-family: 'Montserrat';
		font-size: 3rem;
		text-align: center;
		padding: 0;
		margin: 5px 2px;
		min-width: 6.5rem;
		font-weight: 400;
	}

	:global(span) {
		font-size: 3rem;
		font-family: 'Montserrat';
	}

	.app {
		height: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	button {
		font-size: 1rem;
		width: 35%;
		max-width: 200px;
		height: auto;
		font-family: 'Montserrat';
		font-weight: 700;
	}
</style>

<div class='app'>
	<Editable isEditing={isTimerActive} >
		<svelte:fragment slot='edit'>
			<EditTime bind:hours bind:mins bind:secs />
		</svelte:fragment>
		<svelte:fragment slot='display'>
			<DisplayTime {H} {M} {S} />
		</svelte:fragment>
	</Editable>

	<div class='container'>
			<button on:click={start(input)} disabled="{interval || input == 0}">Start</button>
		{#if interval}
			<button on:click={stop} disabled="{!interval}">Pause</button>
		{:else}
			<button 
				on:click={reset} 
				disabled="{interval || !input || (countDown === input)}"
			>Reset</button>
		{/if}
	</div>	
</div>
