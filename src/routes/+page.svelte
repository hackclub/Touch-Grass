<style>
    @import '$lib/progressbar.css';
</style>
<script lang="ts">
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { ScrollSmoother } from "gsap/ScrollSmoother";
	import { onMount } from "svelte";
	import {json} from "@sveltejs/kit";


	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	let distRan = $state("");
	let distGo = $state("");
	let test = $state("");
	let faqs = $state(false);

	let progressBarPercent = $state(0);

	async function getDistance() {
        console.log("help");
        const result = await fetch('/api/airtable');
        const datatogo = await result.json();
		distGo = datatogo["distance"] // distance to go

		const resultRun = await fetch('/api/airtable/run');
		const dataRun = await resultRun.json();
		let distanceRan = dataRun.totalDistance; // distance ran
		distRan = distanceRan;
		progressBarPercent = (Number(distRan) / (Number(distRan) + Number(distGo)) * 100);

		if (progressBarPercent != 0) {
		var elem = document.getElementById("myBar");
		var width = 1;
		var id = setInterval(frame, 15);
		function frame() {
		if (width >= progressBarPercent) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + "%";
		}
		}}
	}
	onMount(() => {
		// Register GSAP plugins
		gsap.registerPlugin(ScrollTrigger);

		getDistance()

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

	function logout() {
		document.cookie = `auth=; path=/; max-age=0;`;
		window.location.reload();
	}
</script>


<div class="bg-sky-1 w-full min-h-screen relative flex flex-col z-0 items-center overflow-hidden">
	<button class=" hidden border-2 border-white text-xl absolute top-8 left-10 px-3 py-1 text-white opacity-20 z-1000 hover:opacity-40 cursor-pointer" onclick={getDistance}>{test}</button>
	<p class="opacity-10 text-4xl absolute top-12 left-5 text-white">Made with &lt;3 by alex and augie</p>
	<div id="myProgress" class="h-12">
		<p class="absolute right-5 text-4xl text-white">{Math.round(100*(distGo-distRan))/100}km to go</p>
		<p class="absolute left-5 text-4xl text-white">{distRan}km ran</p>
  		<div id="myBar"></div>
	</div>

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

	{#if faqs}
	<button class="hover:text-grass-bright z-50 text-grass underline decoration-2 right-5 absolute top-15 text-4xl hover:cursor-pointer px-2 rounded-lg" style="background-color: rgba(255, 255, 255, 0.1)" onclick={() => faqs = !faqs}>Home</button>
	<div class="text-center text-3xl mt-3 max-w-5xl z-50 p-5 rounded-lg"
	style="background-color: rgba(0, 0, 0, 0.7)">
	<h2 class="text-4xl text-grass-bright">What is Touch Grass?</h2>
	<p class="text-grass">Touch Grass is a Hack Club YSWS where for every hour you spend on a shipped project, we'll run 200m.

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
	<p class="text-grass">You can get on the VIP list by shipping a project that we think is cool, and that also encourages others to go outside.</p>

	<h2 class="text-4xl text-grass-bright">My question is unanswered, help???</h2>
	<p class="text-grass">Feel free to ask it in the slack channel <a href="https://hackclub.slack.com/archives/C09BQMHB724" class="hover:text-grass-bright underline decoration-2">#touch-grass</a>.</p>
	</div>


	{:else}
	<button class="hover:text-grass-bright z-50 text-grass underline decoration-2 right-5 absolute top-15 text-4xl hover:cursor-pointer  px-2 rounded-lg" style="background-color: rgba(255, 255, 255, 0.1)" onclick={() => faqs = !faqs}>FAQs</button>
	<div class="flex flex-col items-center w-full px-4 z-40">
		<img src="/logo.png" alt="Touch Grass" class="h-[1em] text-7xl object-contain mt-32 mb-4 select-none" draggable="false">
		<p class="text-4xl text-grass-bright leading-7 text-center mb-1">you ship we suffer</p>
		<p class="text-4xl text-grass leading-7 text-center">
			<a href="https://hackclub.slack.com/archives/C09BQMHB724" class="hover:text-grass-bright underline decoration-2">#touch-grass</a> in the Hack Club Slack
		</p>
		<p class="text-3xl text-grass max-w-4xl text-center">
			for every hour you spend coding<span class="hidden"> on <a href="https://summer.hackclub.com" class=" hover:text-grass-bright underline decoration-2">Summer of Making</a></span>, we'll run 200m
		</p><p class="text-3xl text-grass max-w-4xl text-center -translate-y-2">
			<span class="hover:text-grass-bright hover:cursor-pointer underline decoration-2" onclick={() => faqs = !faqs}>become a VIP</span>,  and you can make us run double
		</p>

	</div>
	{/if}

	<div class="w-full grow-1"></div>

	
	<!-- bottom content -->
	<div class="relative w-full flex flex-col">
		<!-- submit button -->
		{#if !faqs}
		<a
			href="https://submit.hackclub.com/touch-grass"
			class="translate-y-52 justify-center items-center flex flex-col z-10 group cursor-pointer w-max mx-auto" bind:this={submitButton}
			onclick={submit}
		>
			<span class="flex flex-col items-center scale-140">
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
		{/if}
		<div class="relative min-h-64 xl:min-h-80 max-sm:min-h-48">
			<div class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[url(/trees.png)] w-full h-screen min-w-200 bg-contain bg-bottom bg-no-repeat"></div>
			<div class="absolute bottom-0 left-0 bg-[url(/grass1.png)] w-full h-full min-w-200 bg-contain bg-bottom-left bg-no-repeat max-sm:-translate-x-12"></div>
			<div class="absolute bottom-0 right-0 bg-[url(/grass2.png)] w-full h-full min-w-200 bg-contain bg-bottom-right bg-no-repeat max-sm:translate-y-8"></div>
		</div>
	</div>
</div>
