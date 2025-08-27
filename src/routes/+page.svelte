<style>
    @import '$lib/progressbar.css';
</style>
<!-- svelte-ignore non_reactive_update -->
<script lang="ts">
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { ScrollSmoother } from "gsap/ScrollSmoother";
	import { onMount } from "svelte";
	import {json} from "@sveltejs/kit";


	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	let distRan = $state(0);
	let distGo = $state(0);
	let test = $state("");
	let faqs = $state(false);

	let progressBarPercent = $state(0);
	let progressBar: HTMLDivElement;

	async function getDistance() {
        const result = await fetch('/api/airtable');
        const datatogo = await result.json();
		distGo = datatogo["distance"] // distance to go

		const resultRun = await fetch('/api/airtable/run');
		const dataRun = await resultRun.json();
		let distanceRan = dataRun.totalDistance; // distance ran
		distRan = distanceRan;
		progressBarPercent = (Number(distRan) / (Number(distRan) + Number(distGo)) * 100);

		if (progressBarPercent != 0) {
			var width = 1;
			var id = setInterval(frame, 15);
			function frame() {
				if (width >= progressBarPercent) {
					clearInterval(id);
				} else {
					width++;
					progressBar.style.width = width + "%";
				}
			}
		}
	}

	let clouds1: HTMLDivElement;
	let stars: HTMLDivElement;
	let clouds2: HTMLDivElement;
	let trees: HTMLDivElement;

	onMount(() => {
		getDistance()

		// Register GSAP plugins
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

		// Create ScrollSmoother instance
		ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 1,
			smoothTouch: 0.1,
		});

		// parallax for background
		gsap.to(clouds1, {
			yPercent: 40,
			ease: "none",
			scrollTrigger: {
				trigger: clouds1,
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		});
		gsap.to(stars, {
			yPercent: 10,
			ease: "none",
			scrollTrigger: {
				trigger: stars,
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		});
		gsap.to(clouds2, {
			yPercent: 40,
			ease: "none",
			scrollTrigger: {
				trigger: clouds2,
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		});
		gsap.to(trees, {
			yPercent: 20,
			ease: "none",
			scrollTrigger: {
				trigger: trees,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
		});
	});

	let submitDiv: HTMLDivElement;
	let submitted = false;
	function submit(e: MouseEvent) {
		e.preventDefault();

		if (submitted) return;
		submitted = true;

		submitDiv.dataset.pressed = "true";

		setTimeout(() => {
			submitted = false;
			submitDiv.dataset.pressed = "false";
			window.location.href = "https://submit.hackclub.com/touch-grass";
		}, 1750);
	}
</script>


<div id="smooth-wrapper">
<div id="smooth-content">
<div class="bg-sky-1 w-full min-h-screen relative flex flex-col z-0 items-center overflow-hidden">
	<button class=" hidden border-2 border-white text-xl absolute top-8 left-10 px-3 py-1 text-white opacity-20 z-1000 hover:opacity-40 cursor-pointer" onclick={getDistance}>{test}</button>
	<p class="opacity-10 text-4xl absolute top-12 left-5 text-white">Made with &lt;3 by alex and augie</p>
	<div id="myProgress" class="h-12">
		<p class="absolute right-5 text-4xl text-white">{Math.round(100*(distGo-distRan))/100}km to go</p>
		<p class="absolute left-5 text-4xl text-white">{distRan}km ran</p>
  		<div id="myBar" bind:this={progressBar}></div>
	</div>

	<div
		class="bg-[url(/clouds1.png)] bg-cover bg-bottom bg-no-repeat absolute h-screen top-0 w-full left-0 -z-10 after:absolute after:w-full after:h-full after:bg-sky-2 after:top-full"
		bind:this={clouds1}
	></div>
	<div
		class="bg-[url(/stars.png)] bg-contain bg-top bg-repeat-y absolute h-full top-0 w-full left-0 -z-10"
		bind:this={stars}
	></div>
	<div
		class="bg-[url(/clouds2.png)] bg-cover bg-bottom bg-no-repeat absolute h-[90%] w-full left-0 -z-10 after:absolute after:w-full after:h-full after:bg-white after:top-full"
		bind:this={clouds2}
	></div>

	{#if faqs}
	<button class="hover:text-grass-bright z-50 text-grass underline decoration-2 right-5 absolute top-15 text-4xl hover:cursor-pointer px-2 rounded-lg" style="background-color: rgba(255, 255, 255, 0.1)" onclick={() => faqs = !faqs}>Home</button>
	<div class="text-center text-3xl mt-3 max-w-5xl z-50 p-5 rounded-lg"
	style="background-color: rgba(0, 0, 0, 0.7)">
	<h2 class="text-4xl text-grass-bright">What is Touch Grass?</h2>
	<p class="text-grass">Touch Grass is a Hack Club YSWS where for every hour you spend on a shipped project, we'll run 200m.</p>

	<h2 class="text-4xl text-grass-bright">How can I participate?</h2>
	<p class="text-grass">You can participate by shipping a project, and submitting it here.</p>


	<h2 class="text-4xl text-grass-bright">Is this double dippable with Summer of Making?</h2>
	<p class="text-grass">Yes!</p>

	<h2 class="text-4xl text-grass-bright">Are there any ways for us to make you run more?</h2>
	<p class="text-grass">Yes! You can make us run more by shipping more projects and encouraging your friends to do that as well. We will also match the distance you run on the day of submission.</p>

	<p class="text-grass">You can also try to get on our VIP list.</p>

	<h2 class="text-4xl text-grass-bright">What's so special about the VIP list?</h2>
	<p class="text-grass">Well, if you're on it, we'll run 400m for every hour you spend on a shipped project.</p>

	<h2 class="text-4xl text-grass-bright">How can I get on the VIP list?</h2>
	<p class="text-grass">You can get on the VIP list by shipping a project that we think is cool!</p>

	<h2 class="text-4xl text-grass-bright">My question is unanswered, help???</h2>
	<p class="text-grass">Feel free to ask it in the slack channel <a href="https://hackclub.slack.com/archives/C09BQMHB724" class="hover:text-grass-bright underline decoration-2">#touch-grass</a>.</p>
	</div>


	{:else}
	<button class="hover:text-grass-bright text-grass underline decoration-2 right-5 absolute top-15 text-4xl hover:cursor-pointer px-2 max-sm:mt-6 opacity-80" onclick={() => faqs = !faqs}>FAQs</button>
	<div class="flex flex-col items-center w-full px-4">
		<img src="/logo.png" alt="Touch Grass" class="h-[1em] text-7xl object-contain mt-32 mb-4 select-none" draggable="false">
		<p class="text-3xl 2xl:text-4xl text-grass-bright leading-7 text-center mb-1">you ship we suffer</p>
		<p class="text-3xl 2xl:text-4xl text-grass leading-7 text-center">
			<a href="https://hackclub.slack.com/archives/C09BQMHB724" class="hover:text-grass-bright underline decoration-2">#touch-grass</a> in the Hack Club Slack
		</p>
		<p class="text-3xl 2xl:text-4xl text-grass max-w-4xl text-center pt-8">
			for every hour you spend coding<span class="hidden"> on <a href="https://summer.hackclub.com" class=" hover:text-grass-bright underline decoration-2">Summer of Making</a></span>, we'll run 200m
		</p><p class="text-3xl 2xl:text-4xl text-grass max-w-4xl text-center -translate-y-2 opacity-60">
			<button class="hover:text-grass-bright hover:cursor-pointer underline decoration-2" onclick={() => faqs = !faqs}>become a VIP</button>,  and you can make us run double
		</p>

		<div class="w-64 bg-[url(/monitor-bg.png)] bg-size-[100%_100%] aspect-[9/16] border-monitor mt-12">
			<!-- svelte-ignore a11y_media_has_caption -->
			<video src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/bc8128dc324c96a40759759917bf5378a73ef1b4_you_ship_we_suffer.mp4" class="w-full h-full" controls></video>
		</div>

	</div>
	{/if}

	<div class="w-full grow-1 min-h-24"></div>

	
	<!-- submit button -->
	{#if !faqs}
	<div
		class="justify-center items-center flex flex-col z-10 group w-max mx-auto -mb-32"
		bind:this={submitDiv}
	>
		<a
			class="bg-scanlines text-grass text-4xl px-4 pt-1 pb-2 min-w-36 text-center border-3 border-grass group-hover:text-grass-bright cursor-pointer"
			href="https://submit.hackclub.com/touch-grass"
			onclick={submit}
		>
			submit
		</a>
		<div class="w-16 aspect-[18/29] relative">
			<img
				src="/hand-top.png"
				alt=""
				class="absolute left-0 w-16 aspect-[18/22] object-contain"
			/>
			<div class="absolute left-0 top-[calc(100*18%/25)] w-16 aspect-[18/29] overflow-hidden">
				<img
					src="/finger.png"
					alt=""
					class="w-16 aspect-[18/29] object-contain -translate-y-21/29 group-[:has(a:hover)]:-translate-y-16/29 transition-all group-data-pressed:!translate-none group-data-pressed:duration-500 group-data-pressed:ease-in"
				/>
			</div>
		</div>
		<!-- circle effect for after submission -->
		<div class="rounded-full w-12 h-12 bg-grass -translate-x-2.5 -translate-y-6 scale-0 duration-1500 ease-out group-data-pressed:scale-6000 2xl:group-data-pressed:scale-9000 group-data-pressed:bg-[#171717] transition-[scale,background] delay-[450ms,750ms]"></div>
	</div>
	{/if}
	<div class="relative w-full min-h-64 xl:min-h-80 max-sm:min-h-48 pointer-events-none">
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[url(/trees.png)] w-full h-screen min-w-200 bg-contain bg-bottom bg-no-repeat -translate-y-32 2xl:-translate-y-24" bind:this={trees}></div>
		<div class="absolute bottom-0 left-0 bg-[url(/grass1.png)] w-full h-full min-w-200 bg-contain bg-bottom-left bg-no-repeat max-sm:-translate-x-12"></div>
		<div class="absolute bottom-0 right-0 bg-[url(/grass2.png)] w-full h-full min-w-200 bg-contain bg-bottom-right bg-no-repeat max-sm:translate-y-8"></div>
	</div>
</div>
</div>
</div>
