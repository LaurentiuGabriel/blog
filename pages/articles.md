---
permalink: /articles/
layout: layouts/page.njk
eleventyExcludeFromCollections: true
title: Articles
tagline: Notes on engineering, AI, markets — and whatever I happen to be building.
description: All articles by Laurentiu Raducu.
---

<ul class="article-list">
{%- for post in collections.posts %}
  <li>
    <a class="article-item" href="{{ post.url }}">
      <time class="article-date" datetime="{{ post.date | isoDate }}">{{ post.date | readableDate }}</time>
      <h2 class="article-title">{{ post.data.title }}</h2>
      {%- if post.data.description %}
      <p class="article-description">{{ post.data.description }}</p>
      {%- endif %}
    </a>
  </li>
{%- else %}
  <li><p class="empty-state">No articles yet. Check back soon.</p></li>
{%- endfor %}
</ul>
