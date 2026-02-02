<script>
    import { _ } from "svelte-i18n";
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    import About from "$lib/About.svelte";
    import Contact from "$lib/Contact.svelte";
    import Hero from "$lib/Hero.svelte";
    import Services from "$lib/Services.svelte";

    $: currentLocale = $page.params.locale || 'en';
    $: alternateLocale = currentLocale === 'en' ? 'de' : 'en';
</script>

<svelte:head>
    <title>{$_('hero.title')} - {$_('hero.subtitle')}</title>
    <meta
        name="description"
        content={$_('hero.subtitle')}
    />
    <link rel="alternate" hreflang="en" href="{base}/en/" />
    <link rel="alternate" hreflang="de" href="{base}/de/" />
    <link rel="alternate" hreflang="x-default" href="{base}/en/" />
</svelte:head>

<main>
    <Hero />
    <Services />
    <!-- <Clients /> -->
    <!-- <Projects /> -->
    <About />
    <Contact />
</main>
