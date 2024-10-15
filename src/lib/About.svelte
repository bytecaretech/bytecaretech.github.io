<script lang="ts">
	import { aboutText as text } from "$lib/texts";
</script>

<section id="about" class="bg-gray-100 py-16">
	<div class="mx-auto flex max-w-4xl flex-col items-center px-4 md:flex-row">
		<div class="mb-8 w-full md:mb-0 md:w-1/2 md:pr-8">
			<h2 class="mb-6 text-3xl font-bold">{text.title}</h2>
			<p class="mb-4 leading-relaxed">{text.description}</p>
			<p class="leading-relaxed">{text.mission}</p>
		</div>
		<div class="w-full md:w-1/2">
			<img src="/founder.png" alt="byteCare Founder" class="w-full rounded-lg shadow-lg" />
		</div>
	</div>
</section>
