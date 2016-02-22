---
title: Tjänster vi erbjuder
process:
  twig: true
---
<h2>{{ page.title()}}</h2>
<div class="services">
  <ul class="services__list">
    {% for key, service in page.parent().header.services %}
      <li class="services__item">{{ service }}</li>
    {% endfor %}
  </ul>
</div>
