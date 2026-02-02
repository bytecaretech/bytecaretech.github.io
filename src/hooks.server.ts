import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Get locale from URL path
    const locale = event.url.pathname.split('/')[1];
    const supportedLocales = ['en', 'de'];
    const lang = supportedLocales.includes(locale) ? locale : 'en';

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', lang)
    });
};
