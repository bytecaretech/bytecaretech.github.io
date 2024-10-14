<script lang="ts">
	import "../app.css";
	import Linkedin from "lucide-svelte/icons/linkedin";
	import { footerText, navText } from "$lib/texts";
</script>

<nav class="bg-white shadow-md sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 py-0">
		<div class="flex justify-center h-16">
			<div class="flex items-center">
				{#each Object.entries(navText) as [key, value]}
					<a href="#{key}" class="text-lg hover:text-purple-500 px-4 py-4">{value}</a>
				{/each}
			</div>
		</div>
	</div>
</nav>

<slot></slot>

<footer class="bg-gray-800 text-white py-8 px-4">
	<div class="max-w-4xl mx-auto flex flex-wrap justify-between">
	  <div class="w-full md:w-1/2 mb-4 md:mb-0">
		<h3 class="text-xl font-semibold mb-2">{footerText.title}</h3>
		<p>{footerText.description}</p>
		<a href="https://www.linkedin.com/company/bytecare" target="_blank" rel="noopener noreferrer" class="inline-flex items-center mt-2 text-purple-300 hover:text-purple-100">
		  <Linkedin size={20} class="mr-1" /> {footerText.linkLinkedIn}
		</a>
	  </div>
		<p class="mt-8text-sm"> {footerText.copyright}
		<br><a href="/imprint"> {footerText.linkImprint}</a> | <a href="/privacy">{footerText.linkPrivacy}</a>
		</p>
	</div>
</footer>
