<script lang="ts">
	import { aboutText as text } from "$lib/texts";
</script>

<section id="about" class=" px-8 py-12">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-center text-3xl font-bold">{text.title}</h2>
		<h3 class="mb-4 text-center text-xl text-brand-black">{text.subtitle}</h3>

		<!-- Responsive two-column layout -->
		<div class="flex flex-col md:flex-row md:items-center md:gap-6">
			<!-- Founder image column -->
			<div class="mx-auto mb-8 mt-4 md:mb-0 md:w-1/3">
				<div class="h-64 w-64 overflow-hidden rounded-full md:h-64 md:w-64">
					<img src="/founder.jpg" alt={text.imgAltText} class="h-full w-full object-cover" />
				</div>
			</div>

			<!-- Text column -->
			<div class="md:w-2/3">
				<div class=" rounded-lg px-6 py-6">
					<p class="mb-4 text-xl font-bold">{text.name}</p>
					<p class="mb-4 leading-relaxed">{text.description}</p>
					<p class="leading-relaxed">{text.mission}</p>
				</div>
			</div>
		</div>
	</div>
</section>
