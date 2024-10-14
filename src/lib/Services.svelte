<script lang="ts">
    import { services } from "$lib/data";
    import { servicesText as text } from "$lib/texts";
    import ServiceCard from "$lib/components/ServiceCard.svelte";
</script>

<section id="services" class="py-16 px-4">
    <h2 class="text-3xl font-bold text-center mb-8">{text.title}</h2>
    <div class="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
        {#each services as service}
            <ServiceCard {service}/>
        {/each}
    </div>
</section>
