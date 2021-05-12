<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Timer from './Timer.svelte'
	
	// incorporate selected endStrategy
	const handleEnd = (e) => {
		if (e.detail.isFinished === true) {
			alert(e.detail.message);
		}
	}
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

	div {
		height: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
</style>

<div>
	<Timer on:end={handleEnd} />	
</div>
