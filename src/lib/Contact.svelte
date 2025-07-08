<script lang="ts">
    import { contactText as text } from "$lib/texts";
</script>

<section id="contact" class="bg-accent px-4 py-8 text-center">
    <h2 class="mb-2 text-3xl font-bold">{text.title}</h2>
    <p class="mx-auto mb-6 max-w-2xl text-lg text-brand-black">{text.description}</p>
    <a
        href={text.link}
        target="_blank"
        rel="noopener"
        class="inline-block rounded-lg bg-primary px-8 py-3 text-lg text-white transition duration-300 hover:bg-secondary"
        >{text.button}</a
    >
</section>
