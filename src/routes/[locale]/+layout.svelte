<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { _ } from "svelte-i18n";
    import "../../app.css";

    $: locale = $page.data.locale || 'en';
</script>

<!-- TODO: Add mobile navigation -->
<div class="flex min-h-screen flex-col">
    <nav class="sticky top-0 z-50 bg-white shadow-md">
        <div class="mx-auto max-w-7xl px-4 py-0">
            <div class="flex h-16 justify-center">
                <!-- TODO: Add logo -->
                <div class="flex items-center">
                    {#each ['home', 'services', 'about', 'contact'] as key (key)}
                        <a
                            href={key === "home" ? `${base}/` : `${base}/#${key}`}
                            class="px-4 py-2 text-lg hover:rounded-md hover:bg-primary hover:text-white"
                            >{$_(`nav.${key}`)}</a
                        >
                    {/each}
                </div>
            </div>
        </div>
    </nav>

    <main class="flex-grow">
        <slot></slot>
    </main>

    <footer class="bg-brand-blue px-4 py-4">
        <div>
            <p class="text-center text-sm text-white">
                {$_('footer.copyright')} |
                <a href="{base}/imprint"> {$_('footer.linkImprint')}</a> |
                <a href="{base}/privacy">{$_('footer.linkPrivacy')}</a>
            </p>
        </div>
    </footer>
</div>
