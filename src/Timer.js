// build background page timer component as svelte component
// bundle & inject into timer.html
// update manifest
// update rollup input/output
import Timer from './Timer.svelte';

const timer = new Timer({
	target: document.body,
	props: {}
});

export default timer;