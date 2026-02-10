<script lang="ts">
    import { onMount } from "svelte";
    import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "$lib/i18n";
    import { resolve } from "$app/paths";

    onMount(() => {
        const languages = navigator.languages || [navigator.language];
        const preferredLocale =
            languages
                .map((lang) => lang.split("-")[0])
                .find((code) =>
                    SUPPORTED_LOCALES.includes(code as (typeof SUPPORTED_LOCALES)[number])
                ) || DEFAULT_LOCALE;

        window.location.replace(resolve(`/${preferredLocale}`));
    });
</script>

<svelte:head>
    <meta http-equiv="refresh" content={`0; url=${resolve(`/${DEFAULT_LOCALE}`)}`} />
</svelte:head>

<!-- Fallback content while redirecting -->
<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <p>Redirecting...</p>
</div>
