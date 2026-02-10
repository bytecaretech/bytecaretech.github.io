import { locale, waitLocale } from "svelte-i18n";
import type { LayoutLoad } from "./$types";
import { setupI18n, isSupportedLocale, DEFAULT_LOCALE } from "$lib/i18n";

setupI18n();

export const load: LayoutLoad = async ({ params }) => {
    const currentLocale = isSupportedLocale(params.locale) ? params.locale : DEFAULT_LOCALE;

    locale.set(currentLocale);
    await waitLocale(currentLocale);

    return { locale: currentLocale };
};
