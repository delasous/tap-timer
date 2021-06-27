import browser from 'webextension-polyfill';

const strategies = [{
    name: 'minimizeWindows',
    run: async () => {
        let windows = await browser.windows.getAll()

        let minimizeWindows = windows.map((w) => {
            browser.windows.update(w.id, { state: 'minimized'})
        })
            
        await Promise.all(minimizeWindows);
    }
}]

export default strategies;