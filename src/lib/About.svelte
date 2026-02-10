<script lang="ts">
    import { resolve } from "$app/paths";
    import { _ } from "svelte-i18n";
</script>

<section id="about" class=" px-8 py-12">
    <div class="mx-auto max-w-5xl">
        <h2 class="mb-2 text-center text-3xl font-bold">{$_("about.title")}</h2>
        <h3 class="mb-4 text-center text-xl text-brand-black">{$_("about.subtitle")}</h3>

        <!-- Responsive two-column layout -->
        <div class="flex flex-col md:flex-row md:items-center md:gap-6">
            <!-- Founder image column -->
            <div class="mx-auto mb-8 mt-4 md:mb-0 md:w-1/3">
                <div class="h-64 w-64 overflow-hidden rounded-full md:h-64 md:w-64">
                    <img
                        src={resolve("/founder.jpg")}
                        alt={$_("about.imgAltText")}
                        class="h-full w-full object-cover"
                    />
                </div>
            </div>

            <!-- Text column -->
            <div class="md:w-2/3">
                <div class=" rounded-lg px-6 py-6">
                    <p class="mb-4 text-xl font-bold">{$_("about.name")}</p>
                    <p class="mb-4 leading-relaxed">{$_("about.description")}</p>
                    <p class="leading-relaxed">{$_("about.mission")}</p>
                </div>
            </div>
        </div>
    </div>
</section>
