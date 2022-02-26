import browser from 'webextension-polyfill';
import toggleIcon from './toggleIcon';

const strategies = [
    {
        display: 'Force minimise window(s)',
        id: 'minimizeWindows',
        description: 'Silently minimise active browser window(s).',
        options: {
            // target: 'all', // | current
            // timeout: 0
        },
        run: async function(interval) { 
            const windows = await browser.windows.getAll();

            const minimizeWindows = windows.map((w) => {
                browser.windows.update(w.id, { state: 'minimized' })
            })

            toggleIcon(interval)
                
            await Promise.all(minimizeWindows);
        }
    },
    {
        display: 'Play alarm',
        id: 'playAlarm',
        description: 'Noisily indicate that time. is. up.',
        options: {
            // playTime: Infinity, // or other number
            // volume?
        },
        run: async function(interval) {
            const audio = new Audio();
                audio.src = browser.runtime.getURL('/double-bell-ding.wav');

            audio.play();

            toggleIcon(interval);
        },
    }
]

export default strategies;