<script>
	import Editable from './Editable.svelte';
	import EditTime from './EditTime.svelte';
	import DisplayTime from './DisplayTime.svelte';

	export let countDown;
	export let interval;
	export let isTimerActive;
	export let isTimeRemaining;

	export let start;  
	export let stop;
	export let reset;

	let hours = '';
	let mins = '';
	let secs = '';

	const hoursToSecs = (hours) => hours * 60 * 60;
	const minsToSecs = (mins) => mins * 60;

	$: input = hoursToSecs(hours) + minsToSecs(mins) + secs;

	$: H = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
	$: M = Math.floor((countDown % (60 * 60)) / (60));
	$: S = Math.floor(countDown % (60));
</script>

<div class='app'>
	<div class='time-container'>
		<Editable isEditing={isTimeRemaining} >
			<svelte:fragment slot='edit'>
				<EditTime bind:hours bind:mins bind:secs />
			</svelte:fragment>
			<svelte:fragment slot='display'>
				<DisplayTime {H} {M} {S} />
			</svelte:fragment>
		</Editable>
	</div>

	<div class='button-container'>
			<button 
				class='button-top'
				disabled={input == 0 || interval}
				on:click={() => start(input)} 
			>Play</button>
			{#if isTimerActive}
				<button 
					class='button-bottom' 
					disabled={!isTimerActive}
					on:click={() => stop()} 
				>Pause</button>
			{:else}
				<button 
					class='button-bottom'
					disabled={interval || !input || (countDown === input)}
					on:click={() => {
						H = M = S = 0;
						reset()
					}} 
				>Reset</button>
			{/if}
	</div>	
</div>

<style>
	:global(body){
		margin: 0;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(.time) {
		display: inline-block;
		min-width: 5rem;
		padding: 0;
		margin: 0;
		font-size: 3rem;
		font-weight: 400;
		text-align: center;
	}

	:global(span) {
		font-size: 3rem;
	}

	.app {
		height: 8rem;
		width: 25rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.time-container {
		height: 100%;
		width: 70%;
		margin-left: 10px;
		display:  flex;
		align-items: center;
		justify-content: space-around;
	}

	.button-container {
		height: 100%;
		width: 25%;
		margin: 5px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	button {
		width: 100%;
		height: 50%;
		background: #FFFFFF;
	}

	.button-top {
		border-top:    5px solid #111827;
		border-right:  5px solid #111827;
		border-bottom: 2.5px solid #111827;
		border-left:   5px solid #111827;
	}

	.button-bottom {
		border-top:    2.5px solid #111827;
		border-right:  5px solid #111827;
		border-bottom: 5px solid #111827;
		border-left:   5px solid #111827;
	}
</style>
