<script lang="ts">
	import ServiceCard from "$lib/components/ServiceCard.svelte";
	import { services } from "$lib/data";
	import { servicesText as text } from "$lib/texts";
</script>

<section id="services" class=" px-8 py-8">
	<div class=" mx-auto max-w-6xl">
		<h2 class="mb-2 text-center text-3xl font-bold">{text.title}</h2>
		<h3 class="mb-8 text-center text-xl text-brand-black">{text.subtitle}</h3>
		<div class="mx-auto flex flex-col justify-between md:flex-row">
			{#each services as service}
				<ServiceCard {service} />
			{/each}
		</div>
	</div>
</section>
