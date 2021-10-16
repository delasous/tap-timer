<script>
    import browser from 'webextension-polyfill';
    import { onMount } from 'svelte';

    import Editable from './Editable.svelte';
    import PencilIcon from '../icons/PencilIcon.svelte';

    let isEditing = {
        hotStart1: false,
        hotStart2: false
    }

    $: hotStart1 = 0;
    $: hotStart2 = 0;

    const setHotKey = (keyName, value) => browser.storage.sync.set({ [keyName]: value });

    const editHotStart = (hotStartName, hotStartValue) => {
        const state = isEditing[hotStartName];
        isEditing[hotStartName] = !state;
        setHotKey(hotStartName, hotStartValue)
    }

    onMount(async ()  => {
        const keys = await browser.storage.sync.get(['hotStart1', 'hotStart2'])
        
        hotStart1 = keys.hotStart1;
        hotStart2 = keys.hotStart2;
    })
</script>

<dl>
    <div class='row'>
        <dt class='row-key'>
            <kbd>
                ⌥ 2
            </kbd>
        </dt>
        <dd class='row-value' >
            Start: 
            <Editable isEditing={isEditing.hotStart1} >
                <svelte:fragment slot='edit'>
                    <input bind:value={hotStart1} />
                </svelte:fragment>
                <svelte:fragment slot='display'>
                    <p>{hotStart1 ?? '-'}</p>
                </svelte:fragment>
            </Editable>
            mins
        </dd>
        <PencilIcon handleClick={() => editHotStart('hotStart1', hotStart1)} />
    </div>
    <div class='row'>
        <dt class='row-key'>
            <kbd>
                ⌥ 3
            </kbd>
        </dt>
        <dd class='row-value' >
            Start: 
            <Editable isEditing={isEditing.hotStart2} >
                <svelte:fragment slot='edit'>
                    <input bind:value={hotStart2} />
                </svelte:fragment>
                <svelte:fragment slot='display'>
                    <p>{hotStart2 ?? '-'}</p>
                </svelte:fragment>
            </Editable>
            mins
        </dd>
        <PencilIcon handleClick={() => editHotStart('hotStart2', hotStart2)} />
    </div>
    <div class='row'>
        <dt class='row-key'>
            <kbd>
                ⌥ S
            </kbd>
        </dt>
        <dd class='row-value' >
            Pause
        </dd> 
    </div>
    <div class='row'>
        <dt class='row-key'>
            <kbd>
                ⌥ R
            </kbd>
        </dt>
        <dd class='row-value' >
            Reset
        </dd> 
    </div>
    <div class='row'>
        <dt class='row-key'>
            <kbd>
                Enter
            </kbd>
        </dt>
        <dd class='row-value' >
            Start (with typed input)
        </dd> 
    </div>
</dl>

<style>
    .row {
        padding: 0.75rem 0;
        width: 90%;
        display: grid;
        align-items: center;
        grid-template-columns: 5rem minmax(12rem, max-content) 5rem;
    }

    .row-key {
        font-size: 0.5rem;
        font-weight: 300;
    }

    .row-value {
        font-size: 1rem;
        font-weight: 100;
        grid-column: span 1 / span 1
    }
    
    kbd {
        display: inline-flex;
        align-items: center;
        border: 0.5px solid #313638;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;
        padding: 5px
    }

    input {
        max-width: 4rem
    }

    p {
        display: inline;
    }
</style>