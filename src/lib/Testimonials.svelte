<script>
  import { testimonials } from "$lib/data";
  import { testimonialsText as text } from "$lib/texts";
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';

  let currentIndex = 0;

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  }
</script>

<section class="py-16 bg-gray-100 px-4">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">{text.title}</h2>
    <div class="bg-white p-6 rounded-lg shadow-md mb-4">
      <p class="mb-4 italic text-lg">"{testimonials[currentIndex].text}"</p>
      <p class="font-semibold">{testimonials[currentIndex].name}, {testimonials[currentIndex].company}</p>
    </div>
    <div class="flex justify-between">
      <button on:click={prevTestimonial} class="text-purple-500 hover:text-purple-600"><ChevronLeft size={24} /></button>
      <button on:click={nextTestimonial} class="text-purple-500 hover:text-purple-600"><ChevronRight size={24} /></button>
    </div>
  </div>
</section>
