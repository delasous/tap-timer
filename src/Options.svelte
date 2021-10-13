<script>
	import browser from 'webextension-polyfill';
    // import { onMount } from 'svelte';

    import CogIcon from './icons/CogIcon.svelte';
    import PencilIcon from './icons/PencilIcon.svelte';
    import Editable from './Editable.svelte';

    let isEditing = false;
    $: hotStart1 = 20;

    const setHotKey = (keyName, value) => browser.storage.sync.set({ [keyName]: value });
    const getHotKey = async (keyName) => {
        const key = await browser.storage.sync.get(keyName)
        keyName = key[keyName];
        // console.log(keyName);
    }

    const handleEdit = async () => {
        isEditing = !isEditing;
        setHotKey('hotStart1', hotStart1);
        // await getHotKey('hotStart1')
    }

</script>

<div class='container'>
    <div class='nav-container'>
        <nav>
            <!-- Nav Content -->
            <CogIcon />
        </nav>
    </div>  
    <main>
        <!-- Main Content -->
        <div>
            <h1>
                Settings
            </h1>
        </div>
        <div class='settings'>
            <div>
                <div class='settings-heading'>
                    <h2>
                        Hot Keys
                    </h2>
                </div>
                <div>
                    <dl>
                        <div class='row'>
                            <dt class='row-key'>
                                <kbd>
                                    ⌥ 2
                                </kbd>
                            </dt>
                            <dd class='row-value' >
                                Start: 
                                <Editable isEditing={isEditing} >
                                    <svelte:fragment slot='edit'>
                                        <input bind:value={hotStart1} />
                                    </svelte:fragment>
                                    <svelte:fragment slot='display'>
                                        <p>{hotStart1}</p>
                                    </svelte:fragment>
                                </Editable>
                                mins
                            </dd>
                            <PencilIcon handleClick={handleEdit} />
                        </div>
                    </dl>
                </div>
            </div>
            <!-- <div class='settings-heading'>
                <h2>
                    Display
                </h2>
            </div>
            <div class='settings-heading'>
                <h2>
                    End Game
                </h2>
            </div> -->
        </div>
    </main>
</div>


<style>
    :global(*) {
        box-sizing: border-box;
    }
    :global(body) {
        height: 100vh;
        width: 100vw;
        margin: 0;
    }

    .container {
        display: flex;
        height: 100%;
        width: 100%;
    }

    .nav-container {
        width: 6rem;
        height: 100%;
        background-color: #FFBEB0
    }

    nav {
        margin-top: 1rem;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    main {
        margin-left: 2rem;
        width: 75%;
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 600;
    }

    .settings {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 75%;
    }

    .settings-heading {
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #313638;
    }

    .row {
        padding: 0.75rem 0;
        width: 90%;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }

    .row-key {
        font-size: 0.5rem;
        font-weight: 300;
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

    .row-value {
        font-size: 1.2rem;
        font-weight: 100;
        grid-column: span 3 / span 3
    }

    input {
        max-width: 4rem
    }

    p {
        display: inline;
    }
</style>