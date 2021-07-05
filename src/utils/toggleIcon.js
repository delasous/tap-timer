import browser from 'webextension-polyfill';

export default function toggleIcon(interval) {
    let icon = interval ? { "32": "icon-active-32.png" } :  { "32": "icon-inactive-32.png" };
    // async
     browser.browserAction.setIcon({ path: icon });
}