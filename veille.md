---
layout: page
title: Veille
title2: Veille numérique & technologique.
---

## {{ page.title2 }}

<div class="veille grid">
    <ul>
    {% for item in site.data.veille %}
    <li>
        <div class="item_content">
            <a target="_blank" href="{{ item.url }}" class="item_link"></a>
            <a href="{{ item.url  }}" class="title">{{ item.title }}</a>
            <span class="thumb" style='height: 178.72px; background-image: url("{{ site.url }}{{ item.thumb | prepend: "/content/"}}");'></span>
        </div>
    </li>
    {% endfor %}
    </ul>
</div>