<script>
    import About from "$lib/About.svelte";
    import Contact from "$lib/Contact.svelte";
    import Hero from "$lib/Hero.svelte";
    import Services from "$lib/Services.svelte";
</script>

<svelte:head>
    <title>byteCare - Empowering small businesses to unlock the power of AI.</title>
    <meta
        name="description"
        content="byteCare - Empowering small businesses to unlock the power of AI."
    />
</svelte:head>

<main>
    <Hero />
    <Services />
    <!-- <Clients /> -->
    <!-- <Projects /> -->
    <About />
    <Contact />
</main>
