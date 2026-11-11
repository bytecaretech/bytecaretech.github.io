# Tooling

## Layout

- `_quarto.yml`: the Quarto `website` project: shared navbar (logo, `EN | DE`), shared footer, `site-url`.
- `en/index.qmd`, `de/index.qmd`: one hand-written page per language. Each section is a Pandoc div with a fixed ID (`hero`, `services`, `about`, `contact`); keep those IDs and the image alt texts stable, since checks rely on them.
- `index.html`: the root redirect, copied as a resource rather than rendered. JavaScript picks `/de/` or `/en/` from `navigator.languages`; `<noscript>` falls back to `/en/`.
- `imprint/`, `privacy/`: German-only legal pages. `404.qmd`: bilingual.
- `_extensions/bytecaretech/bytecare/`: the brand extension (colours, fonts, logo). Treat it as vendored: change the brand in [bytecaretech/bytecare-brand](https://github.com/bytecaretech/bytecare-brand), never here.
- `theme.scss`: site-only overrides on top of the brand.

## Build and preview

```bash
quarto render    # whole site into _site/
quarto preview   # live preview
```

One render builds every page; there are no profiles (see ADR 0001 for when to move to them).

Quarto skips every file under a hidden directory, including when the project itself sits inside one. In a worktree under `.claude/worktrees/`, `quarto render` reports success but renders nothing: copy the project to a path without a dot-directory and render there.

## Styling gotchas

- Quarto's Bootstrap build ships the CSS grid (`.grid`, `.g-col-12`, `.g-col-md-4`), not the flexbox grid: `.row`/`.col-*` don't lay out.
- In `theme.scss`, `scss:defaults` is read before the brand's, so brand variables (`$brand-purple`) only work in `scss:rules`; defaults use the brand's hex values.
- The brand defines dark colours, so Quarto always builds a dark theme and a toggle. The site is light mode only: light is the default and `theme.scss` hides the toggle.
- Fonts load from Bunny Fonts (`fonts.bunny.net`), disclosed in `privacy/index.qmd`. Any new third-party request needs a matching section there.

## Brand updates

```bash
quarto update bytecaretech/bytecare-brand@<tag>
```

Commit the updated `_extensions/` directory.

## Hooks

[prek](https://prek.j178.dev) runs `.pre-commit-config.yaml`:

```bash
prek install                 # once per clone
prek run --all-files
```

The config stays YAML (not `prek.toml`) because Dependabot's `pre-commit` ecosystem only reads that file.

## Commits

Write commit messages in the imperative mood ("Add Clients section"). There's no prefix convention, changelog or version number.

## CI and deploy

`.github/workflows/site.yml` runs on pull requests and on pushes to `main`:

- `lint`: prek via `j178/prek-action`.
- `build`: Quarto (pinned to the local version) runs `quarto render` and uploads `_site/` as the Pages artifact.
- `deploy`: on `main` only, publishes to GitHub Pages at <https://www.bytecare.tech> (custom domain from `CNAME`).

Dependabot updates GitHub Actions and hook revisions weekly. Bump the Quarto pin in the workflow by hand when upgrading Quarto locally.
