<script>
	// import Input from './Input.svelte';
    // import Label from './Label.svelte';

    export let countDown;
    export let input = 10; 

    export let start;  
    // export let stop;
    // export let reset;
  
    // rename this as there will be a Timer class file
</script>
<div class='app'>
    <p>{countDown}</p>
	<button on:click={start(input)}>Start</button>
</div>
