<script lang="ts">
	import { onMount } from 'svelte';

	let slidingContainer: HTMLDivElement;
	let transformPx = '0';

	export let slowness:number;

	onMount(() => {
		function slideIn(event: any) {
			let scrollDist = (slidingContainer.getBoundingClientRect().top - (window.innerHeight / 2)) * -1;
			if (scrollDist >= 0) {
				scrollDist = 0;
			}
			transformPx = (scrollDist / slowness).toString();
		}
		// @ts-ignore
		window.addEventListener('scroll', slideIn);

		return () => { window.removeEventListener('scroll', slideIn) };
	});
</script>

<div
	bind:this={slidingContainer}
	style="transform: translateX({transformPx}px)"
	class={$$props.class}
>
	<slot />
</div>
