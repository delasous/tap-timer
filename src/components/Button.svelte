<script>
    export let disabled;
    export let handleClick;

	export let focussed = false;

	function focus() {
		focussed = true;
	}

	function blur() {
		focussed = false;
	}
</script>

<button 
	class={$$props.class}
	disabled={disabled}
	on:click={handleClick}
	on:focus={focus}
	on:blur={blur}
>
	<slot {disabled} focussed={focussed}></slot>
</button>

<style>
	button {
		border: none;
		background: #FFFFFF;
		padding: 0px
	}

	button:focus {
		outline: none;
	}
</style>
