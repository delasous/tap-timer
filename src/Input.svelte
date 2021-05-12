<script>
	export let name;
	export let max;
	export let value;
	
	let holder = name.slice(0,1) + name.slice(0,1);
	
	const pad = (e) => e.target.value = e.target.value.toString().padStart(2, '0');
	
	const limitChars = (e) => {
		if ((e.target.value.length === 2 && e.keyCode>47 && e.keyCode < 58) || 
				(e.keyCode === 189)) {
			e.preventDefault();
		}
	}
	
	const limitMax = ((limit) => (e) => {
		e.preventDefault()

		let input = e.target.value

		if(input.length > 2) value = e.target.value.slice(0,2);
		if(input.length === 2 && (parseInt(input) > limit)) e.target.value = limit;

	})(max)
</script>

<style>
	input::-webkit-inner-spin-button {
  		-webkit-appearance: none;
  		margin: 0;
	}
	
	input:focus{
   		outline: none;
		box-shadow: 0 4px 2px -2px #32a1ce;
	}
	
	input {
		border: none;
	}
</style>

<input 
	class='time'
	type="number" placeholder={holder} min="0" max={max} 
	bind:value
	on:onchange={limitChars}
	on:focusout={pad}
	on:input={limitMax} 
>