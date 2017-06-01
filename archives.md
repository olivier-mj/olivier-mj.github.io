---
layout: default
title: Archive
permalink: /archives/
published: true
---
<h1 class="page-title">Archive</h1>

<div class="archive-post-list">

   {% for post in site.posts %}
       {% assign currentDate = post.date | date: "%Y" %}
       {% if currentDate != myDate %}
           {% unless forloop.first %}</ul>{% endunless %}
           <h1>{{ currentDate }}</h1>
           <ul>
           {% assign myDate = currentDate %}
       {% endif %}
       <li><a href="{{ post.url }}"><span>{% assign m = post.date | date: "%-m" %}
{{ page.date | date: "%-d" }}
{% case m %}
  {% when '1' %}Janvier
  {% when '2' %}Fevrier
  {% when '3' %}Mars
  {% when '4' %}Avril
  {% when '5' %}Mai
  {% when '6' %}Juin
  {% when '7' %}Juillet
  {% when '8' %}Août
  {% when '9' %}Septembre
  {% when '10' %}Octobre
  {% when '11' %}Novembre
  {% when '12' %}Décember
{% endcase %}
{{ page.date | date: "%Y" }}</span> - {{ post.title }}</a></li>
       {% if forloop.last %}</ul>{% endif %}
   {% endfor %}

</div>
