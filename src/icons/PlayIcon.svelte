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
            stroke={color} fill={color} stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
            d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" 
        />
        <path 
            stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
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
        border: 3px solid #E3DCD2;
	}
</style>


