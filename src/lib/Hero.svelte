<script lang="ts">
	import { heroText as text } from "$lib/texts";
</script>

<section id="hero" class="shadow-s bg-white py-12 text-center">
	<img src="/logo.jpg" alt="byteCare Logo" class="mx-auto mb-4 h-48 w-48" />
	<h1 class="mb-4 text-6xl font-bold">{text.title}</h1>
	<p class="mx-auto mb-10 max-w-2xl text-2xl text-brand-black">{text.subtitle}</p>
	<a
		href={text.link}
		target="_blank"
		class="rounded-lg bg-primary px-6 py-4 text-xl text-white hover:bg-secondary">{text.button}</a
	>
</section>
