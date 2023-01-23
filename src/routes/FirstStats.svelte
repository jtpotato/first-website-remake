<script>
	import GradientText from '$lib/components/GradientText.svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLDivElement}
	 */
	let firstStatsContainer;
	let scrollFraction = 0;

	onMount(() => {
		window.addEventListener('scroll', () => {
			let scrollDist = firstStatsContainer.getBoundingClientRect().top * -1;
			const maxScrollTop = firstStatsContainer.scrollHeight - window.innerHeight;
			const internalScrollFraction = scrollDist / maxScrollTop;

			if (internalScrollFraction < 0) {
				scrollFraction = 0;
			} else if (internalScrollFraction > 1) {
				scrollFraction = 1;
			} else {
				scrollFraction = internalScrollFraction;
			}
		});
	});
</script>

<div bind:this={firstStatsContainer}>
	<div style="height: 200vh">
		<div class="h-screen flex flex-col justify-center items-center sticky top-0 pl-10 md:p-10">
			<div>
				<p class="text-4xl md:text-6xl font-bold">
					<GradientText
						>{Math.floor(2500000 * scrollFraction)
							.toString()
							.padStart(7, '0')}</GradientText
					> students.
				</p>
				<p class="text-4xl md:text-6xl font-bold">
					<GradientText
						>{Math.floor(110 * scrollFraction)
							.toString()
							.padStart(3, '0')}</GradientText
					> countries.
				</p>
				<p class="text-4xl md:text-6xl font-bold">
					<GradientText
						>{Math.floor(2900 * scrollFraction)
							.toString()
							.padStart(4, '0')}</GradientText
					> events <br class="md:hidden" />between 2021 and 2022.
				</p>
			</div>
		</div>
	</div>
</div>
