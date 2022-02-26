<script>
    import browser from 'webextension-polyfill';
    import { onMount } from 'svelte';

    $: _isDisplayButtons = null;

    const setHotKey = (keyName, value) => browser.storage.sync.set({ [keyName]: value });

    const handleEdit = () => setHotKey('isDisplayButtons', _isDisplayButtons);

    onMount(async ()  => {
		const { isDisplayButtons } = await browser.storage.sync.get('isDisplayButtons');
        
		_isDisplayButtons = (isDisplayButtons === undefined) ? true : isDisplayButtons;
    })
</script>

<div class='row'>
    <label for='isDisplayButtons' class='row-key'>
        Display Buttons?
    </label>
    <input 
        class='row-value'
        type='checkbox' 
        name='isDisplayButtons' 
        bind:checked={_isDisplayButtons} 
        on:change={handleEdit}
    />
</div>

<style>
    .row {
        padding: 0.75rem 0;
        width: 90%;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-row-gap: 1.5em;
    }

    .row-key {
        font-size: 1rem;
        font-weight: 400;
        grid-column: span 2 / span 2
    }

    .row-value {
        font-size: 1rem;
        font-weight: 100;
        grid-column: span 1 / span 1
    }

    input {
        max-width: 4rem
    }
</style>