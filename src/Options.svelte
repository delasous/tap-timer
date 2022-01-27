<script>
    import SettingsList from './components/SettingsList.svelte';
    import HotKeySettings from './components/HotKeySettings.svelte';
    import DisplaySettings from './components/DisplaySettings.svelte';
    
    import CogIcon from './icons/CogIcon.svelte';
</script>

<div class='container'>
    <div class='nav-container'>
        <nav>
            <CogIcon />
        </nav>
    </div>  
    <main>
        <div>
            <h1>
                Settings
            </h1>
        </div>
        <div class='settings'>
                <SettingsList 
                    heading='Hot Keys'
                >
                    <HotKeySettings slot='settings' />
                </SettingsList>
            <div class='settings-group'>
                <SettingsList 
                    heading='Display'
                >
                    <DisplaySettings slot='settings' />
                </SettingsList>
            </div>
            <div class='settings-group'>
                <SettingsList 
                    heading='End Game'
                >
                    <div slot='settings'>
                        <p>
                            TAP currently does one thing when your timer ends: 
                            <span>It silently minimises all of your active browser windows.</span>
                            <br>
                            <br>
                            Thats it for now. In future, you will be able to select different strategies here.
                        </p>
                    </div>
                </SettingsList>
            </div>

        </div>
    </main>
</div>

<style>
    :global(*) {
        box-sizing: border-box;
    }
    
    :global(html, body) {
        padding: 0;
        margin: 0;
    }

    :global(body) {
        height: 100vh;
        width: 100vw;
    }

    .container {
        display: flex;
        align-items: stretch;
        min-height: 100%;
        width: 100%;
    }

    .nav-container {
        width: 6rem;
        background-color: #FFBEB0
    }

    nav {
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    main {
        margin: 0 0 5rem 2rem;
        width: 75%;
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 0;
    }

    .settings {
        display: flex;
        flex-direction: column;
    }

    .settings-group {
        margin-top: 3rem;
    }

    p {
        font-size: 1rem;
        font-weight: 100;
    }

    span {
        text-decoration: underline;
    }
</style>