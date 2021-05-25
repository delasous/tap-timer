// build background page timer component as svelte component
// bundle & inject into timer.html
// update manifest
// update rollup input/output

const app = new App({
	target: document.body,
	props: {} // declare whole app props here? or could you e.g pass endStrategy options here?
});

export default app;