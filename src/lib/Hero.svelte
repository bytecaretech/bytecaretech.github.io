<script lang="ts">
	import { fade } from "svelte/transition";
	import { heroText as text } from "$lib/texts";
</script>

<section id="hero" class="bg-gray-100 py-24 text-center" in:fade={{ duration: 300 }}>
	<h1 class="mb-4 text-4xl font-bold">{text.title}</h1>
	<img src="/logo.png" alt="byteCare Logo" class="mx-auto mb-4 h-48 w-48 rounded-lg" />
	<p class="mx-auto mb-6 max-w-2xl text-xl">{text.subtitle}</p>
	<a
		href="https://schedule.dummy/15min"
		class="rounded-lg bg-purple-500 px-6 py-3 text-white hover:bg-purple-600">{text.button}</a
	>
</section>
