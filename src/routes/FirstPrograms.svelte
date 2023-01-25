<script>
	import Slide from '$lib/components/Slide.svelte';
</script>

<div>
	<p class="text-6xl font-bold text-center">Our Programs</p>

	<div class="md:flex md:flex-row md:flex-grow md:justify-center space-y-4 md:space-y-0 md:space-x-4 p-10">
		<Slide class="bg-stone-700 rounded-xl md:w-1/4 shadow-lg space-y-4" slowness={8} >
			<div class="flex justify-center items-center p-8">
				<img src="/img/fll-white.png" class="h-20" alt="FIRST Lego League" />
			</div>
			<img src="/img/program-block-fll.jpg" alt="Children preparing a FIRST Lego League robot" />
			<div class="flex flex-col items-center p-4">
				<p class="text-xs">Ages</p>
				<p class="text-2xl font-thin">4 - 16</p>
			</div>
		</Slide>
		<Slide class="bg-stone-700 rounded-xl md:w-1/4 shadow-lg space-y-4" slowness={4}>
			<div class="flex justify-center items-center p-8">
				<img src="/img/ftc-white.png" class="h-20" alt="FIRST Tech Challenge" />
			</div>
			<img
				src="/img/program-block-ftc.jpg"
				alt="A FIRST Tech Challenge robot inside of a playing field."
			/>
			<div class="flex flex-col items-center p-4">
				<p class="text-xs">Ages</p>
				<p class="text-2xl font-thin">12 - 18</p>
			</div>
			<p />
		</Slide>
		<Slide class="bg-stone-700 rounded-xl md:w-1/4 shadow-lg space-y-4" slowness={2}>
			<div class="flex justify-center items-center p-8">
				<img src="/img/frc-white.png" class="h-20" alt="FIRST Robotics Competition" />
			</div>
			<img
				src="/img/program-block-frc.jpg"
				alt="A FIRST Robotics Competition robot on a display stand being inspected."
			/>
			<div class="flex flex-col items-center p-4">
				<p class="text-xs">Ages</p>
				<p class="text-2xl font-thin">14 - 18</p>
			</div>
		</Slide>
	</div>
</div>
