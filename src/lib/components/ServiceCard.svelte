<script lang="ts">
    import type { Service } from "$lib/types";
    export let service: Service;
</script>

  <div class="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg text-center mb-4 md:mb-0 md:mx-2">
    <div class="flex justify-center mb-4">
      <svelte:component this={service.icon} class="w-12 h-12" />
    </div>
    <h3 class="text-xl font-semibold mb-2">{service.title}</h3>
    <p>{service.description}</p>
  </div>
