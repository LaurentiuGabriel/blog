---
permalink: /contact/
layout: layouts/page.njk
eleventyExcludeFromCollections: true
title: Contact
tagline: Happy to talk about AI agents, options analytics, testing at scale — or a good idea that needs building.
description: Get in touch with Laurentiu Raducu.
---

The fastest way to reach me is email. I read everything, and I reply to most of it.

<ul class="link-grid">
{%- for item in site.socials %}
  <li>
    <a href="{{ item.url }}" rel="noopener" target="_blank">
      <span class="label">{{ item.text }}</span>
      <span class="value">{{ item.url | replace("https://", "") | replace("www.", "") }}</span>
    </a>
  </li>
{%- endfor %}
  <li>
    <a href="mailto:{{ site.email }}">
      <span class="label">Email</span>
      <span class="value">{{ site.email }}</span>
    </a>
  </li>
</ul>

I'm based in **Zürich, Switzerland**, which is CET/CEST — so if you're writing from
another timezone, give me a day.
