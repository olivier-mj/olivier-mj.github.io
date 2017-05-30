---
layout: default
title: "Les  générateurs de site statique la nouvelle tendance !"
categorie:
    -   Jekyll
    -   Web
    -   front-end
cover: "https://cloud.githubusercontent.com/assets/28684330/26564798/d3109f78-44e5-11e7-8929-5093b146a4a4.jpg"
date: 2017-05-30 04:26
author: olivier-mj
comments: true


---
Dans le cadre  d'un de mes stages en cours de formation, j'ai découvert les générateurs de site statique **Jekyll & Middleman**. Et j'ai constaté quelque avantage qu'ils ont par rapport un CMS.



## Que ce qu'un Content Mangement System ?

Les systèmes de gestion de contenu – **content management system ou CMS** en anglais – classiques comme _*Wordpress, Spip ou Drupal*_, permettent de gérer de façon dynamique les contenus : 
* les pages et articles d’un site n’existe pas, 
* ils sont générés dynamiquement lorsqu’un utilisateur tente de les afficher dans son navigateur.

L’ensemble des contenus est donc stocké dans des bases de données. Si je souhaite voir telle page dans mon navigateur, le titre, le contenu, le menu, le pied de page, etc. seront appelés et ma page sera dynamiquement générée. L’avantage est du côté de l’administrateur du site plus que du côté de l’utilisateur, car il est très simple de modifier n’importe quel élément du site, les modifications seront visibles immédiatement en ligne.

Sans parler d’inconvénients, les CMS classiques et dynamiques présentent quelques contraintes, dont celle de devoir disposer d’un serveur web qui gère un ou des langages dynamiques – le plus souvent PHP – ainsi que des bases de données – SQL.

## Que ce qu'un générateur de site statique ?

![jekyll-logo](https://cloud.githubusercontent.com/assets/28684330/26564798/d3109f78-44e5-11e7-8929-5093b146a4a4.jpg)

Un **générateur de site statique** permet de générer rapidement des pages ou des sites web prete à l'emploi en quelque minute. 

Du fait qu'il sépare le contenu du code, on utilise du markdown pour éditer du contenu, nous avons une meilleur gestion des méta-données, facile extensible avec des plugins et dans certain cas nous avons la gestion des catégories & tags.

Pour moi le plus gros avantage des générateurs de site statique face aux **CMS Classic** est la sécurité, comme il ne générer que du code html, nous avons pas à nous soussiez de problème de faille de sécurité (genre wordpress). 

Comme c'est que de l'html niveau perfomance d'affichage ce fait plus rapidement.

Les plus connu sont:
* **Jekyll:** générateur écrit en ruby (Je l'utilise pour ce blog)
* **Middleman:** Un autre génératueur en ruby.
* **Hugo:** écrit en Go c'est le 