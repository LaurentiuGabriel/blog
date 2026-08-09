---
title: Hello, world
description: Why this blog exists, how it's built, and how to add the next post.
date: 2026-08-09
---

Every blog starts the same way, so let's not pretend otherwise: hello, world.

I've been writing for years — courses, books, Medium posts, the Pluralsight blog —
but always on someone else's platform, under someone else's layout, subject to
someone else's algorithm. This is the version I own. No tracking, no newsletter
modal, no cookie banner. Just text on a page.

## What I'll write about

Roughly the things I spend my days on:

- **AI engineering** — LLM agents that do real work, RAG systems that don't
  hallucinate their sources, and the unglamorous plumbing that makes both reliable.
- **Systematic trading and options** — Black-Scholes in practice, Greeks, backtests
  that survive contact with real fills.
- **Testing at scale** — twelve years of QA automation in banks leaves opinions.
- **Whatever I'm building** — games, simulators, side quests that got out of hand.

## How this site is built

It's deliberately boring, and that's the point:

- [Eleventy](https://www.11ty.dev/) turns Markdown into HTML at build time.
- Every page — including the one you're reading — is a `.md` file in `pages/`.
- A GitHub Action builds the site and publishes it to GitHub Pages on every push
  to `main`.
- No client-side framework. The only JavaScript on the page is a dark-mode toggle.

The whole thing is static files. It will still work in ten years, which is more
than I can say for most of the stacks I've shipped professionally.

## Adding a post

Drop a Markdown file into `pages/` with a bit of front matter:

```markdown
---
title: The post title
description: One line that shows up in the article list.
date: 2026-08-09
---

Your words go here.
```

That's the entire workflow. No CMS, no database, no admin panel. Commit, push, and
the Action does the rest.

---

Next up: notes on what actually breaks when you put an LLM agent in charge of real
money. Until then — thanks for reading.
