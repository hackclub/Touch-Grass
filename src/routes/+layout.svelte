<script lang="ts">
	import "../app.css";
	let { children, data } = $props();

	let userInput = $state("");

	function checkPassphrase() {
		document.cookie = `auth=${userInput}; path=/; max-age=31536000;`;
		window.location.reload();
	}
</script>


<div class="overflow-hidden">
{#if true}
	{@render children?.()}
{:else}
	<div
		class="justify-center items-center flex flex-col h-screen bg-[url(/touch-grass.png)] bg-cover bg-left bg-no-repeat"
	>
		<p class="opacity-10 text-4xl absolute top-2 left-5 text-white">with &lt;3 from alex and augie</p>
		<div>
			<h1 class="text-4xl hidden">ATM this is only for Pro Grass Touchers</h1>
			<div>
				<input
					type="text"
					class="text-3xl px-4 py-2 bg-scanlines text-grass-bright outline-0 border-grass border-2 w-96 max-sm:w-72"
					bind:value={userInput}
					onkeydown={(e) => e.key === "Enter" && checkPassphrase()}
					placeholder="Enter passphrase..."
				/>
			</div>
			<h1 class="text-2xl mt-4 hidden">Womp Womp... You can't touch grass just yet.. unless you go outside</h1>
		</div>
	</div>
{/if}
</div>
<style>
:global(*) {
    image-rendering: pixelated;
}
:global(*::selection) {
    background-color: var(--color-sky-3);
    color: white;
}
</style>
