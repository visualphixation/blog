---
title: "Blog"
layout: "base.njk"
eleventyNavigation:
  key: Blog
---

## Blog posts

<ul>
  {% for post in collections.posts %}
  <li>
    <a href="{{ post.url }}">
      <span>{{ post.data.date }}</span> | <span>{{ post.data.title }}</span>
    </a>
  </li>
  {% endfor %}
</ul>
