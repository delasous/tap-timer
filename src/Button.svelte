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
		border: none;
		background: #FFFFFF;
		padding: 0px
	}
</style>
