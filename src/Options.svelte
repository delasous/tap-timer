<script>
    import SettingsList from './components/SettingsList.svelte';
    import HotKeySettings from './components/HotKeySettings.svelte';
    import DisplaySettings from './components/DisplaySettings.svelte';
    
    import CogIcon from './icons/CogIcon.svelte';
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
                <SettingsList 
                    heading='Hot Keys'
                >
                    <HotKeySettings slot='settings' />
                </SettingsList>
            </div>
            <div class='settings-group'>
                <SettingsList 
                    heading='Display'
                >
                    <DisplaySettings slot='settings' />
                </SettingsList>
            </div>
            <!-- <div class='settings-heading'>
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
        margin-bottom: 0;
    }

    .settings {
        display: flex;
        flex-direction: column;
        height: 75%;
    }

    .settings-group {
        margin-top: 2rem;
    }
</style>