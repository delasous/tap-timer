import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {} // declare whole app props here? or could you e.g pass endStrategy options here?
});

export default app;