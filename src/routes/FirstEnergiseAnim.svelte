<script>
	import { onMount } from 'svelte';

	let isMobile = false;

	onMount(() => {
		if (navigator.userAgent.indexOf("Mobi") > -1) {
			isMobile = true;
		}

		const html = document.documentElement;
		const canvas = document.getElementById('scrollAnimation');
		const context = canvas.getContext('2d');
		context.imageSmoothingEnabled = true;

		const currentFrame = (index) =>
			`/img/img_sequences/first-energize/frame-${index.toString().padStart(6, '0')}.jpg`;

		const img = new Image();
		img.src = currentFrame(1);

		img.onload = function () {
			context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
		};

		if (!isMobile) {
			canvas.height = window.innerHeight;
			canvas.width = canvas.height / (9 / 16);

			/**
			 * @type {any[]}
			 */
			let frames = [];

			const updateImage = (/** @type {number} */ index) => {
				let img = frames[index];
				context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
			};

			const firstEnergiseAnimContainer = document.getElementById('firstEnergiseAnimContainer');
			const frameCount = 130;

			const preloadImages = () => {
				for (let i = 1; i < frameCount; i++) {
					const img = new Image();
					img.src = currentFrame(i);
					frames.push(img);
				}
			};

			preloadImages();

			window.addEventListener('scroll', () => {
				const scrollTop = html.scrollTop;
				const maxScrollTop = firstEnergiseAnimContainer.scrollHeight - window.innerHeight;
				const scrollFraction = scrollTop / maxScrollTop;

				if (scrollFraction < 0 || scrollFraction > 1) {
					return;
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

<div style="{isMobile ? "" : "height: 500vh"}" id="firstEnergiseAnimContainer" class="flex flex-col">
	<canvas id="scrollAnimation" class="sticky top-0" style="{isMobile ? "" : "transform: scale(0.5)"}" />
</div>
