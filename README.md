# blog

A minimalist static blog — Eleventy + Markdown, in the spirit of the
[Alpine](https://vercel.com/templates/nuxt/alpine) Nuxt theme, but with no runtime
framework. The output is plain HTML, CSS and ~15 lines of JavaScript for the dark
mode toggle.

Live at **https://laurentiugabriel.github.io/blog/**

## Content

Every page is a Markdown file in `pages/`:

| File | Becomes |
| --- | --- |
| `pages/index.md` | `/` — the about page |
| `pages/articles.md` | `/articles/` — the post index |
| `pages/contact.md` | `/contact/` |
| `pages/hello-world.md` | `/articles/hello-world/` |

Any new `.md` file in `pages/` is published as a post at `/articles/<filename>/`.
`pages/pages.json` supplies the default layout, tag and permalink, so a post only
needs front matter:

```markdown
---
title: The post title
description: One line shown in the article list.
date: 2026-08-09
---

Your words go here.
```

Pages that are *not* posts (about, article index, contact) opt out with
`eleventyExcludeFromCollections: true` and set their own `permalink`. Note that
`tags: []` does **not** work here — Eleventy merges tag arrays down the data
cascade, so the directory tag would survive.

## Local development

```bash
npm install
npm run dev     # http://localhost:8080/blog/ with live reload
npm run build   # static output in _site/
```

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on
every push to `main`.

**One-time setup:** GitHub Pages must be turned on before the first deploy can
succeed — `GITHUB_TOKEN` cannot create a Pages site itself. Go to
**Settings → Pages → Build and deployment → Source** and pick **GitHub Actions**,
then re-run the workflow.

Because this is a project site served under `/blog/`, `eleventy.config.mjs` sets
`pathPrefix: "/blog/"` and Eleventy's `HtmlBasePlugin` rewrites every root-relative
URL to match. The dev server mirrors this, which is why it serves at `/blog/`
locally too. If the repo is ever renamed, change `pathPrefix` to match.

## Structure

```
eleventy.config.mjs      build config, filters, posts collection
_data/site.json          site title, nav, social links
_includes/layouts/       base / page / post templates
css/style.css            the entire theme
pages/                   all content
```
