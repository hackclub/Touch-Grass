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

<div class="bg-sky-1 w-full min-h-screen relative">
	<div
	class="bg-[url(/clouds1.png)] bg-size-[100%] bg-bottom bg-no-repeat absolute h-screen top-0 w-full left-0"
	id="clouds-1"
	></div>
	<div
		class="bg-[url(/stars.png)] bg-size-[100%] bg-bottom bg-no-repeat absolute h-screen top-0 w-full left-0"
		id="stars"
	></div>
	<div
		class="bg-[url(/clouds2.png)] bg-size-[100%] bg-bottom bg-no-repeat absolute h-screen top w-full left-0"
		id="clouds-2"
	></div>
	<!-- bottom content -->
	<div class="w-full relative">
		
	</div>
</div>
