<script>
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { ScrollSmoother } from "gsap/ScrollSmoother";
	import { onMount } from "svelte";

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	onMount(() => {
		// Register GSAP plugins
		gsap.registerPlugin(ScrollTrigger);

		// Setup parallax for cloudy background
		// const clouds1 = document.querySelector("#clouds-1");
		// if (clouds1) {
		// 	gsap.to(clouds1, {
		// 		yPercent: 5,
		// 		ease: "power2.inOut",
		// 		scrollTrigger: {
		// 			trigger: clouds1,
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: true,
		// 		},
		// 	});
		// }
		// const stars = document.querySelector("#stars");
		// if (stars) {
		// 	gsap.to(stars, {
		// 		yPercent: -10,
		// 		ease: "none",
		// 		scrollTrigger: {
		// 			trigger: clouds1,
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: true,
		// 		},
		// 	});
		// }
		// const clouds2 = document.querySelector("#clouds-2");
		// if (clouds2) {
		// 	gsap.to(clouds2, {
		// 		yPercent: -40,
		// 		ease: "none",
		// 		scrollTrigger: {
		// 			trigger: clouds1,
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: true,
		// 		},
		// 	});
		// }
	});
</script>

<div class="bg-sky-1 w-full min-h-screen relative flex flex-col z-0 items-center">
	<div
		class="bg-[url(/clouds1.png)] bg-cover bg-bottom bg-no-repeat absolute h-screen top-0 w-full left-0 -z-10"
		id="clouds-1"
	></div>
	<div
		class="bg-[url(/stars.png)] bg-cover bg-top bg-repeat-y absolute h-screen top-0 w-full left-0 -z-10"
		id="stars"
	></div>
	<div
		class="bg-[url(/clouds2.png)] bg-cover bg-bottom bg-no-repeat absolute h-screen top w-full left-0 -z-10"
		id="clouds-2"
	></div>

	<img src="/logo.png" alt="Touch Grass" class="h-[1em] text-7xl object-contain mt-32 mb-6">
	<p class="text-4xl text-grass-bright leading-2 text-center">you ship we suffer</p>
	<p class="text-4xl text-grass leading-normal text-center">
		<a href="https://hackclub.slack.com/archives/C09BQMHB724" class="hover:text-grass-bright underline decoration-2">#touch-grass</a> in the Hack Club slack
	</p>

	<div class="w-full grow-1"></div>

	<!-- bottom content -->
	<div class="relative w-full flex flex-col">
		<!-- submit button -->
		<div
			class="motion-safe:transition-transform duration-300 translate-y-20 ease-in hover:motion-safe:translate-y-40 justify-center items-center flex flex-col z-10"
		>
			<a href="https://submit.hackclub.com/touch-grass" class="relative">
				<img
					src="/hand.png"
					alt="Submit to Touch Grass"
					class="block w-60 h-60 object-contain"
				/>
				<p class="absolute -translate-y-8 -translate-x-1 bg-green-100 max-h-14 inset-0 flex items-center text-grass justify-center font-bold text-2xl pointer-events-none">Submit</p>
			</a>
		</div>
		<div class="relative min-h-64">
			<div class="absolute bottom-0 left-0 bg-[url(/grass1.png)] w-full min-h-64 min-w-128 bg-contain bg-bottom-left bg-no-repeat"></div>
			<div class="absolute bottom-0 right-0 bg-[url(/grass2.png)] w-full min-h-64 min-w-128 bg-contain bg-bottom-right bg-no-repeat"></div>
		</div>
	</div>
</div>
