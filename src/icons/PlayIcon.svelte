<script>
    export let disabled;

    $: color = disabled ? "#E0DFD5" : "#313638";
</script>

<div class="icon" class:magic="{ !disabled }">
    <svg width="55" height="55" viewBox="0 0 309 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            fill={color} stroke={color} stroke-width="30"
            d="M109.395 227.59C99.3957 233.257 87 226.034 87 214.54V96.022C87 84.5286 99.3957 77.3053 109.395 82.9717L213.97 142.231C224.11 147.977 224.11 162.586 213.97 168.331L109.395 227.59Z" 
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
		transform: perspective(500px) translate3d(0px, 0px, -50px);
	}
</style>


