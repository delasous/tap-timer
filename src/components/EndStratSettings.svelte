<script>
    import browser from 'webextension-polyfill';
    import { onMount } from 'svelte';

    $: _endStratsConfig = []

    const setHotKey = (keyName, value) => browser.storage.sync.set({ [keyName]: value });

    const handleEdit = () => setHotKey('endStratsConfig', _endStratsConfig);

    onMount(async ()  => {
		const { endStratsConfig } = await browser.storage.sync.get('endStratsConfig');

		_endStratsConfig = endStratsConfig;
    })
</script>

<div class='row'>
    {#each _endStratsConfig as strat, ix}
        <div class='row-key'>
            <label for={`endStrat-${ix}`}>
                {strat.display}
            </label>
            <p>
                {strat.description}
            </p>
        </div>
        <input 
            class='row-value'
            type='checkbox' 
            name={`endStrat-${ix}`} 
            bind:checked={_endStratsConfig[ix].isActive} 
            on:change={handleEdit}
        />
    {/each}
</div>

<style>
    .row {
        padding: 0.75rem 0;
        width: 90%;
        display: grid;
        align-items: start;
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

    p {
        font-size: 1rem;
        font-weight: 100;
    }
</style>