<script lang="ts">
	import { contactText as text } from "$lib/texts";
</script>

<section id="contact" class="bg-white px-4 py-16 text-center">
	<h2 class="mb-8 text-3xl font-bold">{text.title}</h2>
	<p class="mx-auto mb-6 max-w-2xl text-lg">{text.description}</p>
	<a
		href="mailto:contact@bytecare.com"
		class="inline-block rounded-lg bg-purple-500 px-8 py-3 text-lg text-white transition duration-300 hover:bg-purple-600"
		>{text.button}</a
	>
</section>
