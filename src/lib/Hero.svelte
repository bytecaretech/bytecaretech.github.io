<script lang="ts">
    import { _ } from "svelte-i18n";
    import { base } from "$app/paths";
</script>

<section id="hero" class="shadow-s bg-white py-12 text-center">
    <img id="logo" src="{base}/logo.jpg" alt={$_('hero.imgAltText')} class="mx-auto mb-4 h-48 w-48" />
    <h1 class="mb-4 text-6xl font-bold">{$_('hero.title')}</h1>
    <p class="mx-auto mb-10 max-w-2xl text-2xl text-brand-black">{$_('hero.subtitle')}</p>
    <a
        href={$_('common.meetingLink')}
        target="_blank"
        class="rounded-lg bg-primary px-6 py-4 text-xl text-white hover:bg-secondary"
        >{$_('hero.button')}</a
    >
</section>
