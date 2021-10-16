<script>
	export let name;
	export let max;
	export let value;
	export let size;
	
	let holder = name.slice(0,1) + name.slice(0,1);
	
	const pad = (e) => {
		if(e.target.value > 0) {
			e.target.value = e.target.value.toString().padStart(2, '0');
		}
	}
	
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
		if(input.length === 2 && (parseInt(input) > limit)) e.target.value = value = limit;
	})(max)
</script>

<style>
	input {
		display: block;
		border: none;
		border-bottom: 3px #313638 solid
	}

	input::placeholder {
		color: #313638;
	}
	
	input::-webkit-inner-spin-button {
  		-webkit-appearance: none;
  		margin: 0;
	}
	
	input:focus{
   		outline: none;
		color: #FFBEB0;
	}

	input:focus::placeholder {
		color: #FFBEB0;
	}
</style>

<input 
	type="number" placeholder={holder} min="0" max={max} 
	class={size}
	bind:value
	on:onchange={limitChars}
	on:focusout={pad}
	on:input={limitMax} 
>
