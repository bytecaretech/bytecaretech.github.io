<script lang="ts">
    import { fade } from "svelte/transition";
    import { heroText as text} from "$lib/texts";
</script>

<section id="hero" class="bg-gray-100 text-center py-24" in:fade={{duration: 300}}>
    <h1 class="text-4xl font-bold mb-4">{text.title}</h1>
    <img src="/logo.png" alt="byteCare Logo" class="mx-auto w-48 h-48 mb-4">
    <p class="mb-6 text-xl max-w-2xl mx-auto">{text.subtitle}</p>
    <a href="https://schedule.dummy/15min" class="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600">{text.button}</a>
</section>
