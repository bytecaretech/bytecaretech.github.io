import { addMessages, init, getLocaleFromPathname } from "svelte-i18n";
import en from "$lib/locales/en.json";
import de from "$lib/locales/de.json";

export const SUPPORTED_LOCALES = ["en", "de"] as const;
export const DEFAULT_LOCALE = "en";

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
    return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function setupI18n() {
    addMessages("en", en);
    addMessages("de", de);

    init({
        fallbackLocale: DEFAULT_LOCALE,
        initialLocale: getLocaleFromPathname(/^\/([a-z]{2})\/?/) ?? DEFAULT_LOCALE
    });
}
