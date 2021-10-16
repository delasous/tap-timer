<script>
    export let count;
    export let type;
    export let size;
    
    const pad = (number) => number.toString().padStart(2, '0');
</script>

<label 
    for={type}
    class={size}
>
    {pad(count)}
</label>

<style>
	label {
		display: block;
		border: none;
		border-bottom: 3px #313638 solid
	}
</style>
