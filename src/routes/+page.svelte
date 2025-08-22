<script lang="ts">
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

	let submitButton: HTMLAnchorElement;
	let submitted = false;
	function submit(e: MouseEvent) {
		e.preventDefault();

		if (submitted) return;
		submitted = true;

		submitButton.dataset.pressed = "true";

		setTimeout(() => {
			submitted = false;
			submitButton.dataset.pressed = "false";
			window.location.href = "https://submit.hackclub.com/touch-grass";
		}, 1750);
	}
</script>

<div class="bg-sky-1 w-full min-h-screen relative flex flex-col z-0 items-center overflow-hidden">
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

	<div class="flex flex-col items-center w-full px-4">
		<img src="/logo.png" alt="Touch Grass" class="h-[1em] text-7xl object-contain mt-32 mb-4 select-none" draggable="false">
		<p class="text-4xl text-grass-bright leading-7 text-center mb-1">you ship we suffer</p>
		<p class="text-4xl text-grass leading-7 text-center">
			<a href="https://hackclub.slack.com/archives/C09BQMHB724" class="hover:text-grass-bright underline decoration-2">#touch-grass</a> in the Hack Club Slack
		</p>
	</div>

	<div class="w-full grow-1"></div>

	<!-- bottom content -->
	<div class="relative w-full flex flex-col">
		<!-- submit button -->
		<a
			href="https://submit.hackclub.com/touch-grass"
			class="translate-y-52 justify-center items-center flex flex-col z-10 group cursor-pointer w-max mx-auto" bind:this={submitButton}
			onclick={submit}
		>
			<span class="flex flex-col items-center">
				<p class="bg-scanlines text-grass text-4xl px-4 pt-1 pb-2 min-w-36 text-center border-3 border-grass group-hover:text-grass-bright">submit</p>
				<img
					src="/hand-top.png"
					alt=""
					class="w-16 aspect-[18/22] object-contain"
				/>
				<div class="w-16 aspect-[18/29] overflow-hidden">
					<img
						src="/finger.png"
						alt=""
						class="w-16 aspect-[18/29] object-contain -translate-y-21/29 group-hover:-translate-y-16/29 transition-all group-data-pressed:translate-none group-data-pressed:duration-500 group-data-pressed:ease-in"
					/>
				</div>
				<!-- circle effect for after submission -->
				<div class="rounded-full w-12 h-12 bg-grass -translate-x-2.5 -translate-y-6 scale-0 duration-1500 ease-out group-data-pressed:scale-6000 group-data-pressed:bg-[#171717] transition-[scale,background] delay-[450ms,750ms]"></div>
			</span>
		</a>
		<div class="relative min-h-64 xl:min-h-80 max-sm:min-h-48">>
			<div class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[url(/trees.png)] w-full h-screen min-w-200 bg-contain bg-bottom bg-no-repeat"></div>
			<div class="absolute bottom-0 left-0 bg-[url(/grass1.png)] w-full h-full min-w-200 bg-contain bg-bottom-left bg-no-repeat max-sm:-translate-x-12"></div>
			<div class="absolute bottom-0 right-0 bg-[url(/grass2.png)] w-full h-full min-w-200 bg-contain bg-bottom-right bg-no-repeat max-sm:translate-y-8"></div>
		</div>
	</div>
</div>
