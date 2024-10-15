<script lang="ts">
	import "../app.css";
	import Linkedin from "lucide-svelte/icons/linkedin";
	import { footerText, navText } from "$lib/texts";
</script>

<nav class="sticky top-0 z-50 bg-white shadow-md">
	<div class="mx-auto max-w-7xl px-4 py-0">
		<div class="flex h-16 justify-center">
			<div class="flex items-center">
				{#each Object.entries(navText) as [key, value]}
					<a
						href={key === "home" ? "/" : `/#${key}`}
						class="px-4 py-4 text-lg hover:text-purple-500">{value}</a
					>
				{/each}
			</div>
		</div>
	</div>
</nav>

<slot></slot>

<footer class="bg-gray-800 px-4 py-8 text-white">
	<div class="mx-auto flex max-w-4xl flex-wrap justify-between">
		<div class="mb-4 w-full md:mb-0 md:w-1/2">
			<h3 class="mb-2 text-xl font-semibold">{footerText.title}</h3>
			<p>{footerText.description}</p>
			<a
				href="https://www.linkedin.com/company/bytecare"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-2 inline-flex items-center text-purple-300 hover:text-purple-100"
			>
				<Linkedin size={20} class="mr-1" />
				{footerText.linkLinkedIn}
			</a>
		</div>
		<p class="mt-8text-sm">
			{footerText.copyright}
			<br /><a href="/imprint"> {footerText.linkImprint}</a> |
			<a href="/privacy">{footerText.linkPrivacy}</a>
		</p>
	</div>
</footer>
