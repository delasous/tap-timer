import browser from 'webextension-polyfill';
import toggleIcon from './toggleIcon';

const strategies = [{
    display: 'Force Minimise Window',
    name: 'minimizeWindows',
    config: {},

    // TODO pass entire state
    run: async function(interval) { 
        let windows = await browser.windows.getAll()

        let minimizeWindows = windows.map((w) => {
            browser.windows.update(w.id, { state: 'minimized'})
        })

        toggleIcon(interval)
            
        await Promise.all(minimizeWindows);
    },
}]

export default strategies;