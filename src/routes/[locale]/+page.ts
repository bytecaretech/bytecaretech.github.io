import { SUPPORTED_LOCALES } from "$lib/i18n";

export const prerender = true;

export const entries = () => {
    return SUPPORTED_LOCALES.map((locale) => ({ locale }));
};
