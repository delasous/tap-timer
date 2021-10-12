<script>
	import Editable from './Editable.svelte';
	import EditTime from './EditTime.svelte';
	import DisplayTime from './DisplayTime.svelte';
	import Button from './Button.svelte';
	import Play from './icons/PlayIcon.svelte';
	import Pause from './icons/PauseIcon.svelte';
	import Stop from './icons/StopIcon.svelte';

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
	<div class='body'>
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
						<Stop disabled={interval || !isTimeRemaining} />
					</Button>
				{/if}
		</div>	
	</div>
</div>

<style>
	:global(body){
		margin: 0;
	}

	:global(*) {
		font-family: 'Exo', sans-serif;
		box-sizing: border-box;
	}

	:global(.bigtime) {
		min-width: 6.125rem;
		padding: 0;
		margin: 0;
		font-size: 4rem;
		font-weight: 400;
		text-align: center;
	}

	:global(.bigtime::placeholder) {
		font-size: 3.8rem;
		letter-spacing: -3px;
	}

	:global(.smalltime) {
		font-size: 2rem;
		align-self: end;
		min-width: 3.065rem;
		line-height: 3.7rem;
		font-weight: 400;
		text-align: center;
	}

	.app {
		width: 24rem;
		margin: 2rem 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.body {
		width: 75%;
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.time-container {
		height: 100%;
		width: 100%;
		display:  flex;
		align-items: center;
		justify-content: start;
	}

	.button-container {
		height: 100%;
		width: 100%;
		margin-top: 0.5rem;
		display: flex;
		flex-direction: row;
		justify-content: left;
	}
</style>
