<script lang="ts">
    import { _ } from "svelte-i18n";
</script>

<section id="contact" class="bg-accent px-4 py-8 text-center">
    <h2 class="mb-2 text-3xl font-bold">{$_("contact.title")}</h2>
    <p class="mx-auto mb-6 max-w-2xl text-lg text-brand-black">{$_("contact.description")}</p>
    <a
        href={$_("common.meetingLink")}
        target="_blank"
        rel="noopener"
        class="inline-block rounded-lg bg-primary px-8 py-3 text-lg text-white transition duration-300 hover:bg-secondary"
        >{$_("contact.button")}</a
    >
</section>
