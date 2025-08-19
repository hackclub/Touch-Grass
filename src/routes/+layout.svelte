<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children, data } = $props();

	let userInput = $state("");

	function checkPassphrase() {
		document.cookie = `auth=${userInput}; path=/; max-age=31536000;`;
		window.location.reload();
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if data.isAuthenticated}
	{@render children?.()}
{:else}
	<div class="justify-center items-center flex flex-col h-screen">
		<h1 class="text-4xl">ATM this is only for Pro Grass Touchers</h1>
		<div>
		<input 
			type="text"
			class="w-xl h-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
			bind:value={userInput} 
			onkeydown={(e) => e.key === 'Enter' && checkPassphrase()}
			placeholder="Enter passphrase..."
		/>
		</div>
		<h1 class="text-2xl mt-4">Womp Womp... You can't touch grass just yet.. unless you go outside</h1>
	</div>
{/if}
<style>
	:global(*) {
		image-rendering: pixelated;
	}
</style>