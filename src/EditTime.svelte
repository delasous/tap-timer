<script>
    import Input from './Input.svelte';

    export let hours, mins, secs;
</script>

<div class='container'>
    <Input name='Hours' max=23 bind:value={hours} size='bigtime' />
        <span>:</span>
    <Input name='Minutes' max=59 bind:value={mins} size='bigtime' />
        <span>:</span>
    <Input name='Seconds' max=59 bind:value={secs} size='smalltime' />
</div>

<style>
    .container {
        display: flex;
    }

    span {
        display: block;
        border: none;
        border-bottom: 3px #313638 solid;
        font-size: 4rem;
    }
</style>
