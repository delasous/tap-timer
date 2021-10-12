<script>
    import Label from '../src/Label.svelte';

    export let H, M, S;
</script>

<div class='container'>
    <Label type='Hours' count={H} size='bigtime' />
        <span>:</span>
    <Label type='Minutes' count={M} size='bigtime' />
        <span>:</span>
    <Label type='Seconds' count={S} size='smalltime' />
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
