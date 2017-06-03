---
layout: page
title: Blog
blog: true
permalink: "/blog/"
paginate: 3
paginate_path: "/blog/page:num/"
pagination: 
  enabled: true
---

<div class="posts">
  {% for post in site.posts %}
  <div class="post">
    <h1 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>

    <span class="post-date">{% assign m = post.date | date: "%-m" %}
{{ post.date | date: "%-d" }}
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
{{ post.date | date: "%Y" }}
  
    
  • <a href="{{ site.url }}/{{ post.url }}#disqus_thread" data-disqus-identifier="{{ site.disqus_shortname }}">0 Commentaires</a>
          </span>
    

    {{ post.content | strip_html | truncatewords: 50 | '<a href=' post.url '> Lire la suite </a>' }} 
  </div>
  {% endfor %}
</div>

<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ site.baseurl }}page{{paginator.next_page}}">Suivant</a>
  {% else %}
    <span class="pagination-item older">Suivant</span>
  {% endif %}
  {% if paginator.previous_page %}
    {% if paginator.page == 2 %}
      <a class="pagination-item newer" href="{{ site.baseurl }}">Précédent</a>
    {% else %}
      <a class="pagination-item newer" href="{{ site.baseurl }}page{{paginator.previous_page}}">Précédent</a>
    {% endif %}
  {% else %}
    <span class="pagination-item newer">Précédent</span>
  {% endif %}
</div>