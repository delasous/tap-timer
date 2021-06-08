<script>
    import Label from '../src/Label.svelte';
    export let H, M, S;
</script>

<div class='container'>
    <Label type='Hours' count={H} />
        <span>:</span>
    <Label type='Minutes' count={M} />
        <span>:</span>
    <Label type='Seconds' count={S} />
</div>