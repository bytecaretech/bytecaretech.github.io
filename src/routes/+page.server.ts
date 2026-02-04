import { redirect } from "@sveltejs/kit";
import parser from "accept-language-parser";
import type { RequestEvent } from "./$types";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "$lib/i18n";

export const prerender = false;

export function load({ request }: RequestEvent) {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const languages = parser.parse(acceptLanguage);

    const preferredLocale =
        languages
            .map((lang) => lang.code)
            .find((code) =>
                SUPPORTED_LOCALES.includes(code as (typeof SUPPORTED_LOCALES)[number])
            ) || DEFAULT_LOCALE;

    throw redirect(302, `/${preferredLocale}`);
}
