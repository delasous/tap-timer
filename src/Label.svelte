<script>
    export let count;
    export let type;
    
    const pad = (number) => number.toString().padStart(2, '0');
</script>

<label for={type} class='time'>{pad(count)}</label>
