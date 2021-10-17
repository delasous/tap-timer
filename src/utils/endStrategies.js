import browser from 'webextension-polyfill';
import toggleIcon from './toggleIcon';

const strategies = [{
    display: 'Force Minimise Window',
    id: 'minimizeWindows',
    description: 'Silently minimise active browser windows.',
    config: {
        target: 'all', // | current
        timeout: 0
    },

    // TODO pass entire state
    run: async function(interval) { 
        const windows = await browser.windows.getAll();

        const minimizeWindows = windows.map((w) => {
            browser.windows.update(w.id, { state: 'minimized' })
        })

        toggleIcon(interval)
            
        await Promise.all(minimizeWindows);
    },
}]

export default strategies;