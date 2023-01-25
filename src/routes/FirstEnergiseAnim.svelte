<script lang="ts">
	import { onMount } from 'svelte';

	let isMobile = false;
	let firstEnergiseAnimContainer: HTMLDivElement;
	let canvas: HTMLCanvasElement;

	onMount(() => {
		if (navigator.userAgent.indexOf("Mobi") > -1) {
			isMobile = true;
		}

		const html = document.documentElement;
		const context = canvas.getContext('2d');

		const currentFrame = (index: number) =>
			`/img/img_sequences/first-energize/frame-${index.toString().padStart(6, '0')}.jpg`;

		if (!isMobile) {
			canvas.height = window.innerHeight;
			canvas.width = canvas.height / (9 / 16);

			let frames: any[] = [];

			const updateImage = (index: number) => {
				let img = frames[index];
				try {
					context?.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
				} catch (error) {
					// literally do nothing.
					console.error(index, frames.length, error)
				}
				
			};

			const frameCount = 130;

			const preloadImages = () => {
				for (let i = 1; i < frameCount + 1; i++) {
					const img = new Image();
					img.src = currentFrame(i);
					frames.push(img);
				}

				updateImage(1);
			};

			preloadImages();

			window.addEventListener('scroll', () => {
				const scrollTop = firstEnergiseAnimContainer.getBoundingClientRect().top * -1;
				const maxScrollTop = firstEnergiseAnimContainer.scrollHeight - window.innerHeight;
				let scrollFraction = scrollTop / maxScrollTop;

				if (scrollFraction < 0) {
					scrollFraction = 0;
				}
				if (scrollFraction > 1) {
					scrollFraction = 1;
				}

				const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
				if (frameIndex >= 0) {
					requestAnimationFrame(() => updateImage(frameIndex));
				}
			});
		} else {
			console.log("is mobile")
			canvas.width = window.innerWidth * 2;
			canvas.height = canvas.width / (16 / 9);
		}
	});
</script>

<div style="{isMobile ? "" : "height: 300vh"}" bind:this={firstEnergiseAnimContainer} class="flex flex-col">
	<canvas bind:this={canvas} class="sticky top-0" style="{isMobile ? "" : "transform: scale(0.5)"}" />
</div>
