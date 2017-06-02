---
layout: page
title: Veille
title2: Veille technologique.
---
## La veille technologique c'est quoi ?

La veille technologique est une activité qui met en œuvre des techniques d’acquisition, de stockage et d’analyse d’informations, concernant un produit ou un procédé, sur l’état de l’art et l’évolution de son environnement scientifique, technique, industriel ou commercial, afin de collecter, organiser, puis analyser et diffuser les informations pertinentes qui vont permettre d’anticiper les évolutions, et qui vont faciliter l’innovation.
Plus simplement, la veille technologique consiste à se tenir au courant de l’actualité afin d’être à même de faire de meilleurs choix, d’innover, de créer…

<div class="veille grid">
    <ul class="item">
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