<script>
	import GradientText from '$lib/components/GradientText.svelte';
</script>

<div class="bg-stone-800 text-white">
	<!--Header-->
	<div class="flex flex-row items-center bg-stone-900 p-4">
		<img src="/img/first-bw.svg" class="h-10 cursor-pointer" />
	</div>
	<div class="p-10 flex flex-col justify-center">
		<p class="text-6xl font-bold text-center">
			A global robotics community preparing young people for the <GradientText>future</GradientText
			>.
		</p>
	</div>
	<div class="p-10 flex flex-row space-x-16">
		<div class="">
			<div class="">
				<img
					src="/img/shuttle.png"
					alt="Photography of a space shuttle inside of a hangar"
					class="object-cover object-right-bottom w-full h-80 rounded-xl"
				/>
			</div>
			<p class="text-center">
				Photo by <a
					href="https://unsplash.com/@meric?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					class="underline">Meriç Dağlı</a
				>
				on
				<a
					href="https://unsplash.com/photos/WWdCXWmDLQw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					class="underline">Unsplash</a
				>
			</p>
		</div>
		<div class="flex items-center">
			<div>
				<p class="text-4xl font-bold">
					The <GradientText>world's leading</GradientText> STEM education nonprofit.
				</p>
				<br />
				<p>
					FIRST® inspires young people to be science and technology leaders and innovators by
					engaging them in exciting mentor-based programs that build science, engineering, and
					technology skills, that inspire innovation, and that foster well-rounded life capabilities
					including self-confidence, communication, and leadership.
				</p>
			</div>
		</div>
	</div>
	<div class="p-10 bg-black">
		<div class="flex flex-col items-center">
			<p class="text-6xl font-bold">
				The <GradientText>power</GradientText> is <GradientText>yours</GradientText>.
			</p>
		</div>
	</div>
</div>
