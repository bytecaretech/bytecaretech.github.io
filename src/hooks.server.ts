import type { Handle } from "@sveltejs/kit";
import { DEFAULT_LOCALE, isSupportedLocale } from "$lib/i18n";

export const handle: Handle = async ({ event, resolve }) => {
    const pathLocale = event.url.pathname.split("/")[1];
    const lang = isSupportedLocale(pathLocale) ? pathLocale : DEFAULT_LOCALE;

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace("%sveltekit.lang%", lang)
    });
};
