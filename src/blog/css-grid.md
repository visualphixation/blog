---
title: "All about CSS Grid"
date: "2022-05-17"
templateEngineOverride: njk,md
---

<div class="date">{{ page.date | postDate }}</div>

## Let's dive into CSS Grid!

<article class="blog-body">
  <p>Some sources of inspiration:</p>

- [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [cssgrid.io - Wes Bos](https://cssgrid.io/)

</article>

<div class="grid-container">
  <div class="grid1">
    {% Card title="Hello", link="/home", linkText="go home" %}
  </div>
  <div class="grid2">
    {% Card title="Hello", link="/home", linkText="go home" %}
  </div>
  <div class="grid3">
    {% Card title="Hello", link="/home", linkText="go home" %}
  </div>
</div>

<div>
  <button class="button" href="http://www.visualphixaion.com">Hi, I'm a button</button>
</div>
