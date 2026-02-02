import { addMessages, init, locale, waitLocale } from "svelte-i18n";
import type { LayoutLoad } from "./$types";

// Import translation files directly
import de from "$lib/locales/de.json";
import en from "$lib/locales/en.json";

addMessages("en", en);
addMessages("de", de);
init({ fallbackLocale: "en", initialLocale: "en" });

export const load: LayoutLoad = async ({ params }) => {
    const { locale: paramLocale } = params;

    const supportedLocales = ["en", "de"];
    const currentLocale = supportedLocales.includes(paramLocale) ? paramLocale : "en";

    locale.set(currentLocale);

    await waitLocale(currentLocale);

    return {
        locale: currentLocale
    };
};
