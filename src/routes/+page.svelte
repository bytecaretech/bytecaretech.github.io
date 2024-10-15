<script>
	import Hero from "$lib/Hero.svelte";
	import Services from "$lib/Services.svelte";
	import About from "$lib/About.svelte";
	import Projects from "$lib/Projects.svelte";
	import Testimonials from "$lib/Testimonials.svelte";
	import Contact from "$lib/Contact.svelte";
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
	<About />
	<Projects />
	<Testimonials />
	<Contact />
</main>
