<script>
    import { resolve } from "$app/paths";
    import { page } from "$app/stores";
    import About from "$lib/About.svelte";
    import Contact from "$lib/Contact.svelte";
    import Hero from "$lib/Hero.svelte";
    import Services from "$lib/Services.svelte";
    import { _ } from "svelte-i18n";

    $: currentLocale = $page.params.locale || "en";
</script>

<svelte:head>
    <title>{$_("hero.title")} - {$_("hero.subtitle")}</title>
    <meta name="description" content={$_("hero.subtitle")} />
    <link rel="alternate" hreflang="en" href={resolve("/en/")} />
    <link rel="alternate" hreflang="de" href={resolve("/de/")} />
    <link rel="alternate" hreflang="x-default" href={resolve("/en/")} />
</svelte:head>

<main>
    <Hero />
    <Services />
    <!-- <Clients /> -->
    <!-- <Projects /> -->
    <About />
    <Contact />
</main>
