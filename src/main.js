import App from './App.svelte';

console.log("moment: ", moment);

const app = new App({
	target: document.body,
	props: {
//		dayjs,
	}
});

export default app;