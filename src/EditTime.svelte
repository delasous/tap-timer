<script>
    import Input from './Input.svelte';

    export let hours, mins, secs;
</script>

<div>
    <Input name='Hours' max=23 bind:value={hours} />
        <span>:</span>
    <Input name='Minutes' max=59 bind:value={mins} />
        <span>:</span>
    <Input name='Seconds' max=59 bind:value={secs} />
</div>
