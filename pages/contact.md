---
permalink: /contact/
layout: layouts/page.njk
eleventyExcludeFromCollections: true
title: Contact
tagline: Happy to talk about AI agents, options analytics, testing at scale.
description: Get in touch with me.
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