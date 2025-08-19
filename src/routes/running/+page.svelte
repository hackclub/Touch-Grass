<script>
    // this vibecode just works ---- So let's just leave it --
  import { onMount } from 'svelte';
  
  let embedContainer;
  
  onMount(() => {
    // Clear any existing embeds first
    if (embedContainer) {
      embedContainer.innerHTML = '<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="11341795836" data-style="standard" data-from-embed="false"></div>';
    }
    
    // Load and initialize Strava embeds script
    if (!window.StravaEmbeds) {
      const script = document.createElement('script');
      script.src = 'https://strava-embeds.com/embed.js';
      script.onload = () => {
        if (window.StravaEmbeds && window.StravaEmbeds.init) {
          window.StravaEmbeds.init();
        }
      };
      document.head.appendChild(script);
    } else {
      // Script already loaded, just reinitialize
      window.StravaEmbeds.init();
    }
  });
</script>

<h1 class="hidden"> Completed Runs </h1>


<h1> Our Running Portfolios </h1>
<div bind:this={embedContainer}>
  <div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="11341795836" data-style="standard" data-from-embed="false"></div>
</div>