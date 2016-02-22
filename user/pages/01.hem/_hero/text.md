---
title: Wallsin Entreprenad
---
<section class="hero">
  {% set image =  page.media.images|first %}
  <img src="{{ image.url() }}" alt="{{ image.meta.alt_text }}" />
  <div class="hero--content">
    <h1 class="hero--heading">{{ page.title() }}</h1>
  </div>
</section>
