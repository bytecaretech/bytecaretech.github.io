<script lang="ts">
	import { contactText as text } from "$lib/texts";
</script>

<section id="contact" class="bg-accent px-4 py-8 text-center">
	<h2 class="mb-2 text-3xl font-bold">{text.title}</h2>
	<p class="text-brand-black mx-auto mb-6 max-w-2xl text-lg">{text.description}</p>
	<a
		href={text.link}
		target="_blank"
		rel="noopener"
		class="bg-primary hover:bg-secondary inline-block rounded-lg px-8 py-3 text-lg text-white transition duration-300"
		>{text.button}</a
	>
</section>
