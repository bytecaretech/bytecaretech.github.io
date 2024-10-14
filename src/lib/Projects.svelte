<script lang="ts">
  import { projects } from "$lib/data";
  import { projectText as text } from "$lib/texts";
</script>

<section id="projects" class="py-16 px-4">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">{text.title}</h2>
    <div class="grid md:grid-cols-2 gap-8">
      {#each projects as project}
        <div class="bg-gray-100 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-2">{project.name}</h3>
          <p>{project.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
