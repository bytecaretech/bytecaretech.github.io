<script lang="ts">
	import type { Service } from "$lib/types";
	export let service: Service;
</script>

<div class="mb-4 w-full rounded-lg bg-gray-100 p-6 text-center md:mx-2 md:mb-0 md:w-1/3">
	<div class="mb-4 flex justify-center">
		<svelte:component this={service.icon} class="h-12 w-12" />
	</div>
	<h3 class="mb-2 text-xl font-semibold">{service.title}</h3>
	<p>{service.description}</p>
</div>
