<script>
    export let heading;
</script>

<div>
    <div class='settings-heading'>
        <h2>
            {heading}
        </h2>
    </div>
    <div>
       <slot name='settings' />
    </div>
</div>

<style>
    .settings-heading {
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #313638;
    }

    h2 {
        font-size: 1rem;
        font-weight: 600;
    }
</style>