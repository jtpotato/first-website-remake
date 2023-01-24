<script>
	import GradientText from '$lib/components/GradientText.svelte';
	import Donate from './Donate.svelte';
	import FirstEnergiseAnim from './FirstEnergiseAnim.svelte';
	import FirstPrograms from './FirstPrograms.svelte';
	import FirstStats from './FirstStats.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="bg-stone-800 text-white">
	<!--Header-->
	<div class="flex flex-row items-center justify-center md:justify-start bg-stone-900 p-4">
		<img src="/img/first-bw.svg" class="h-10 cursor-pointer" alt="The logo of FIRST" />
	</div>
		<div class="flex flex-col justify-center md:h-80 p-10">
			<p class="text-4xl md:text-6xl font-bold text-center">
				A global robotics community preparing young people for the <GradientText>future</GradientText
				>.
			</p>
		</div>
	<div class="p-10 flex flex-col-reverse md:flex-row md:space-x-16">
		<div class="flex items-center">
			<div>
				<p class="text-2xl md:text-4xl font-bold">
					The <GradientText>world's leading</GradientText> STEM education nonprofit.
				</p>
				<br class="hidden md:block" />
				<p>
					FIRST® inspires young people to be science and technology leaders and innovators by
					engaging them in exciting mentor-based programs that build science, engineering, and
					technology skills, that inspire innovation, and that foster well-rounded life capabilities
					including self-confidence, communication, and leadership.
				</p>
			</div>
		</div>
		<div class="block md:hidden h-4"></div>
		<!--Image with attribs-->
		<img
			src="/img/frc-1.jpg"
			alt="A FIRST Robotics Competition Robot"
			class="object-cover object-right-bottom w-full md:w-1/2 rounded-xl"
		/>
	</div>
	<div class="bg-black">
		<FirstEnergiseAnim />
		<div class="bg-[url('/img/dots-bg-lightgreen.png')] bg-right">
			<div class="px-10 py-20 flex flex-col items-center bg-black bg-opacity-90">
				<p class="text-4xl md:text-6xl font-bold text-center">
					Innovation <GradientText>cannot</GradientText> wait.
				</p>
				<br />
				<p class="w-2/3">
					From the machines that move us to the food that sustains us to the wireless technologies
					that connect us, energy plays an essential role in keeping our world running. During our
					2022-2023 robotics season, FIRST® ENERGIZE℠ presented by Qualcomm, our teams will
					reimagine the future of sustainable energy and power their ideas forward.
				</p>
				<br />
				<a
					class="px-10 py-5 bg-white text-black rounded-full cursor-pointer shadow-lg-round shadow-lime-500"
					href="https://www.youtube.com/watch?v=m-qwsMmkFwg"
					target="_blank"
					rel="noreferrer"
				>
					<p class="font-bold flex flex-row items-center">
						Watch the video
						<span class="material-icons ml-1">play_circle_outline</span>
					</p>
				</a>
			</div>
		</div>
	</div>
	<div class="bg-stone-800">
		<FirstStats />
	</div>
	<div class="bg-stone-800">
		<FirstPrograms />
	</div>
	<div class="bg-black">
		<Donate />
	</div>
	<div class="bg-stone-800">
		<Footer />
	</div>
</div>
