<script>
    export let isEditing;

    const setEditing = () => isEditing = !isEditing;
</script>

{#if isEditing}
    <slot name='edit' {setEditing} />
{:else}
    <slot name='display' {setEditing} />
{/if}
