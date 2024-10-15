<script lang="ts">
	import ServiceCard from "$lib/components/ServiceCard.svelte";
	import { services } from "$lib/data";
	import { servicesText as text } from "$lib/texts";
</script>

<section id="services" class="px-4 py-16">
	<h2 class="mb-8 text-center text-3xl font-bold">{text.title}</h2>
	<div class="mx-auto flex max-w-4xl flex-col justify-between md:flex-row">
		{#each services as service}
			<ServiceCard {service} />
		{/each}
	</div>
</section>
