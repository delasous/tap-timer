<script>
	import Editable from './Editable.svelte';
	import EditTime from './EditTime.svelte';
	import DisplayTime from './DisplayTime.svelte';
	import Button from './Button.svelte';
	import Play from './icons/PlayIcon.svelte';
	import Pause from './icons/PauseIcon.svelte';
	import Refresh from './icons/ResetIcon.svelte';

	export let countDown;
	export let interval;
	export let isTimerActive;
	export let isTimeRemaining;
	export let _input;

	export let start;  
	export let pause;
	export let reset;

	let hours = '';
	let mins = '';
	let secs = '';

	const hoursToSecs = (hours) => hours * 60 * 60;
	const minsToSecs = (mins) => mins * 60;

	$: input = _input ?? hoursToSecs(hours) + minsToSecs(mins) + secs;

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
			<Button 
				class='button-top'
				disabled={input == 0 || interval}
				handleClick={() => start(input)} 
			>
				<Play disabled={input == 0 || interval} />
			</Button>
			{#if isTimerActive}
				<Button 
					class='button-bottom' 
					disabled={!isTimerActive}
					handleClick={() => pause()} 
				>
					<Pause disabled={!isTimerActive} />
				</Button>
			{:else}
				<Button 
					class='button-bottom'
					disabled={interval || !isTimeRemaining}
					handleClick={() => {
						H = M = S = 0;
						reset()
					}} 
				>
					<Refresh disabled={interval || !isTimeRemaining} />
				</Button>
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
		min-width: 4rem;
		padding: 0;
		margin: 0;
		font-size: 2.5rem;
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
		width: 60%;
		margin: 0 auto;
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
</style>
