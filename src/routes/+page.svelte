<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { ScrollSmoother } from "gsap/ScrollSmoother";
    import { onMount } from 'svelte';

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    onMount(() => {
		// Register GSAP plugins
		gsap.registerPlugin(ScrollTrigger);
		
		// Setup parallax for cloudy background
		const cloudyBg = document.querySelector('.cloudy-bg-parallax');
		if (cloudyBg) {
			gsap.to(cloudyBg, {
				yPercent: 20,
				ease: "none",
				scrollTrigger: {
					trigger: cloudyBg,
					start: "bottom bottom",
					end: "bottom top",
					scrub: true
				}
			});
		}

})

</script>

<div class="bg-sky-1 w-full min-h-screen">

</div>