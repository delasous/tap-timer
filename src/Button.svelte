<script>
    export let disabled;
    export let handleClick;
</script>

<button 
	class={$$props.class}
	disabled={disabled}
	on:click={handleClick}
>
	<slot {disabled}></slot>
</button>

<style>
	button {
		width: 100%;
		height: 50%;
		background: #FFFFFF;
	}

	.button-top {
		border-bottom: 1px solid #313638;
		border-left: 2px solid #313638;
		border-right: none;
		border-top: none;
	}

	.button-bottom {
		border-top: 1px solid #313638;
		border-left: 2px solid #313638;
		border-right: none;
		border-bottom: none;
	}
</style>
