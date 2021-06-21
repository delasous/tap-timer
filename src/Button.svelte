<script>
    export let disabledOn;
    export let handleClick;
</script>

<button 
	class={$$props.class}
	disabled={disabledOn}
	on:click={handleClick} 
    >
	<slot></slot>
</button>