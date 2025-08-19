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

<div class="bg-sky-1 w-full min-h-screen relative flex flex-col">
	<div
		class="bg-[url(/clouds1.png)] bg-cover bg-bottom bg-no-repeat absolute h-screen top-0 w-full left-0"
		id="clouds-1"
	></div>
	<div
		class="bg-[url(/stars.png)] bg-cover bg-top bg-repeat-y absolute h-screen top-0 w-full left-0"
		id="stars"
	></div>
	<div
		class="bg-[url(/clouds2.png)] bg-cover bg-bottom bg-no-repeat absolute h-screen top w-full left-0"
		id="clouds-2"
	></div>

	<div class="w-full grow-1"></div>

	<!-- bottom content -->
	<div class="relative w-full flex flex-col">
		<div
			class="transition-transform duration-300 ease-in-out hover:translate-y-10 justify-center items-center flex flex-col"
		>
			<a href="https://submit.hackclub.com/touch-grass">
				<img
					src="/hand.png"
					alt="Submit to Touch Grass"
					class="block"
				/>
			</a>
		</div>
		<div class="relative min-h-64">
			<div class="absolute bottom-0 left-0 bg-[url(/grass1.png)] w-full min-h-64 min-w-128 bg-contain bg-bottom-left bg-no-repeat"></div>
			<div class="absolute bottom-0 right-0 bg-[url(/grass2.png)] w-full min-h-64 min-w-128 bg-contain bg-bottom-right bg-no-repeat"></div>
		</div>
	</div>
</div>
