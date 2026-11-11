# byteCare Website

The byteCare website at <https://www.bytecare.tech>: a single page in English (`/en/`) and German (`/de/`), plus the German Impressum and Datenschutzerklärung.

Built with [Quarto](https://quarto.org) and styled by the [byteCare brand extension](https://github.com/bytecaretech/bytecare-brand). GitHub Actions renders the site and deploys it to GitHub Pages on every push to `main`.

## Develop

Requires Quarto 1.10 and [prek](https://prek.j178.dev).

```bash
quarto preview
prek run --all-files
```

Edit the pages as Markdown in `en/index.qmd` and `de/index.qmd`. See [docs/agent/tooling.md](docs/agent/tooling.md) for the details and [docs/adr/](docs/adr/) for the decisions behind the setup.
