<script lang="ts">
    import { json, _ } from "svelte-i18n";
    import type { Client } from "$lib/types";

    $: clients = ($json("clients.items") ?? []) as Client[];
</script>

<section id="clients" class="bg-accent px-4 py-8">
    <div class="mx-auto max-w-6xl">
        <h2 class="mb-2 text-center text-3xl font-bold">{$_("clients.title")}</h2>
        <h3 class="mb-8 text-center text-xl text-brand-black">{$_("clients.subtitle")}</h3>

        <div class="grid gap-8 md:grid-cols-3">
            {#each clients as client (client)}
                <!-- TODO: Extract into container -->
                <div class="rounded-lg bg-white p-6">
                    <h3 class="mb-2 text-center text-xl font-semibold">
                        <a class="hover:text-primary" href={client.link} target="_blank"
                            >{client.name}</a
                        >
                    </h3>
                    <p class="text-sm">{client.text}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
