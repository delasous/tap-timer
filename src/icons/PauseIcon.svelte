<script>
    export let disabled;

    $: color = disabled ? "#E3DCD2" : "#313638";
</script>

<div class="icon">
    <svg
        class:magic="{ !disabled }"
        width="70" 
        height="70" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >        
        <path 
            stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            d="M10 9V15M14 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        />
    </svg>
</div>

<style>
    div {
        width: 100%;
        height: 100%;
    }

    .icon {
		position: relative;
        display: inline-block;
	}

	.magic:hover {
        border-radius: 999px;
        border: 3px solid #FFBEB0;
	}
</style>
