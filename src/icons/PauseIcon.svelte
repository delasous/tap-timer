<script>
    export let disabled;

    $: color = disabled ? "#E0DFD5" : "#313638";
</script>

<div class="icon" class:magic="{ !disabled }">
    <svg class="icon" width="55" height="55" viewBox="0 0 309 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            fill={color}
            d="M79 211.667C79 227.315 90.1929 240 104 240C117.807 240 129 227.315 129 211.667V98.3333C129 82.6853 117.807 70 104 70C90.1929 70 79 82.6853 79 98.3333V211.667ZM204 240C190.193 240 179 227.315 179 211.667V98.3333C179 82.6853 190.193 70 204 70C217.807 70 229 82.6853 229 98.3333V211.667C229 227.315 217.807 240 204 240Z" 
        />
        <path 
            stroke={color}
            d="M79 211.667C79 227.315 90.1929 240 104 240C117.807 240 129 227.315 129 211.667V98.3333C129 82.6853 117.807 70 104 70C90.1929 70 79 82.6853 79 98.3333V211.667ZM204 240C190.193 240 179 227.315 179 211.667V98.3333C179 82.6853 190.193 70 204 70C217.807 70 229 82.6853 229 98.3333V211.667C229 227.315 217.807 240 204 240Z" 
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
