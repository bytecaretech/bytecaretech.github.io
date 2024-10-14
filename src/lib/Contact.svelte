<script lang="ts">
  import { contactText as text} from "$lib/texts";
</script>

<section id="contact" class="py-16 bg-white text-center px-4">
  <h2 class="text-3xl font-bold mb-8">{text.title}</h2>
  <p class="mb-6 max-w-2xl mx-auto text-lg">{text.description}</p>
  <a href="mailto:contact@bytecare.com" class="bg-purple-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-600 transition duration-300 inline-block">{text.button}</a>
</section>
