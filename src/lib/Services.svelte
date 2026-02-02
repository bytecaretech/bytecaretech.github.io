<script lang="ts">
    import ServiceCard from "$lib/components/ServiceCard.svelte";
    import type { ServiceItem } from "$lib/types";
    import { CodeIcon, GraduationCapIcon, LightbulbIcon } from "lucide-svelte";
    import { _ } from "svelte-i18n";

    const services: ServiceItem[] = [
        { key: "consulting", icon: LightbulbIcon },
        { key: "software", icon: CodeIcon },
        { key: "training", icon: GraduationCapIcon }
    ];
</script>

<section id="services" class=" px-8 py-8">
    <div class=" mx-auto max-w-6xl">
        <h2 class="mb-2 text-center text-3xl font-bold">{$_("services.title")}</h2>
        <h3 class="mb-8 text-center text-xl text-brand-black">{$_("services.subtitle")}</h3>
        <div class="mx-auto flex flex-col justify-between md:flex-row">
            {#each services as service (service.key)}
                <ServiceCard {service} />
            {/each}
        </div>
    </div>
</section>
