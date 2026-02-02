import { redirect } from "@sveltejs/kit";
import parser from "accept-language-parser";
import type { RequestEvent } from "./$types";

export const prerender = false;

const SUPPORTED_LOCALES = ["en", "de"];
const DEFAULT_LOCALE = "en";

export function load({ request }: RequestEvent) {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const languages = parser.parse(acceptLanguage);

    const preferredLocale =
        languages.map((lang) => lang.code).find((code) => SUPPORTED_LOCALES.includes(code)) ||
        DEFAULT_LOCALE;

    throw redirect(302, `/${preferredLocale}`);
}
