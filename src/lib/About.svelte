<script lang="ts">
  import { aboutText as text } from "$lib/texts";
</script>

<section id="about" class="py-16 bg-gray-100">
    <div class="flex flex-col md:flex-row max-w-4xl mx-auto items-center px-4">
      <div class="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h2 class="text-3xl font-bold mb-6">{text.title}</h2>
        <p class="mb-4 leading-relaxed">{text.description}</p>
        <p class="leading-relaxed">{text.mission}</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="/founder.png" alt="byteCare Founder" class="rounded-lg shadow-lg w-full">
      </div>
    </div>
  </section>
