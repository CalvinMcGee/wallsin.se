---
process:
  twig: true
---
<table>
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th style="text-align: right;">exkl. moms</th>
      <th style="text-align: right;">inkl. moms</th>
    </tr>
  </thead>
  <tbody>
    {% for price, values in page.parent().header.prices %}
      <tr>
        <td>{{ price }}</td>
        <td style="text-align: right;">{{ values.ex }}</td>
        <td style="text-align: right;">{{ values.inkl }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
