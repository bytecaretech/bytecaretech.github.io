<script lang="ts">
    import { projects } from "$lib/data";
    import { projectText as text } from "$lib/texts";
</script>

<section id="projects" class="px-4 py-8">
    <div class="mx-auto max-w-4xl">
        <h2 class="mb-8 text-center text-3xl font-bold">{text.title}</h2>
        <div class="grid gap-8 md:grid-cols-2">
            {#each projects as project (project)}
                <div class="rounded-lg bg-accent p-6">
                    <h3 class="mb-2 text-xl font-semibold">{project.name}</h3>
                    <p class="text-sm">{project.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
