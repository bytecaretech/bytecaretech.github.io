---
status: accepted
---

# Quarto website with one shared navigation for both languages

The site is a rarely updated, single-page business card in English and German. SvelteKit, Tailwind and the Node toolchain behind it were far more machinery than that needs, so we moved to a Quarto `website` project, the tool already used for other byteCare sites and documents. Each language is a hand-written page (`en/index.qmd`, `de/index.qmd`) built in a single `quarto render`, and both share one built-in navbar (logo and an `EN | DE` switcher) and one `page-footer`. Navigation is therefore not translated and has no section links.

## Considered Options

- **Per-directory navbar via `en/_metadata.yml` and `de/_metadata.yml`.** Doesn't work: Quarto only reads `website: navbar` from the project config and silently ignores it in directory metadata (verified with Quarto 1.10).
- **Quarto profiles** (`_quarto-en.yml`, `_quarto-de.yml` plus a root profile). Works and gives fully translated navigation, but needs three renders in a fixed order. Rendering into `_site` wipes `_site/en` and `_site/de`, so a plain `quarto render` silently produces a broken site. `quarto preview` shows one language at a time, which breaks the language switcher and legal links during preview. Too much hidden ceremony for a site touched a few times a year.
- **Custom HTML partials for the header and footer in each language.** Rejected in favour of staying with built-in Quarto features.

## Consequences

- Revisit this, and move to profiles, if the site grows pages whose navigation genuinely needs translated labels.
- The legal pages (`/imprint/`, `/privacy/`) exist only in German, which is legally sufficient, so the shared footer uses German labels.
- Hooks run with prek, but the config stays `.pre-commit-config.yaml` rather than `prek.toml`, because Dependabot's `pre-commit` ecosystem only reads the YAML file.
- Styling comes from the `bytecare-brand` Quarto brand extension, pinned to a release tag. Its fonts load from Bunny Fonts rather than being bundled, because Quarto 1.10 doesn't copy brand font files into reveal.js output. Bunny's CSS now points the font files at `cdn.jsdelivr.net`, so visitors' IP addresses reach both Bunny (BunnyWay d.o.o., Slovenia) and jsDelivr (Volentio JSD Limited, UK, served through CDNs that include US companies), and the privacy policy discloses both. Self-hosting the fonts only on the website was rejected, because it would duplicate the brand's font settings. It was considered again once the jsDelivr redirect showed up and still not chosen; the two hosts are disclosed instead.
