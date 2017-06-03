---
title: Projets Personnels Encadrés - Gestion des stages
layout: page
description: Vous trouverez ici les projets réalisé pour mon PPE.
image: projet-personnel-encadre.png
published: true
---

## Contexte général

Chaque année, le **GRETA Est Bretagne**, forme de nombreux adultes, par le biais de la formation continue. Dans le vocabulaire de la formation continue, les apprenants sont appelés stagiaires. Ceux-ci sont généralement amenés à effectuer un ou plusieurs stages entrepris, administrations et organisations, durant leur période de formation.

Ces stages doivent faire l'objet de visites en situation, par des formateurs GRETA. Pour l'organisation des plannings de visites, les formateurs doivent rechercher les coordonnées des entreprises, administrations et organisations, dans les conventions de stage.

Chaque visite doit être consigné dans un rapport de visite, rempli en partie par le tuteur du stagiaire en entreprise, et par le formateur effectuant la visite en situation.

La gestion de tous ces nombreux documents papiers est fastidieuse : archivage et accès à ces documents, ainsi qu'aux informations qu'ils contiennent.

Pour faciliter l'organisation des plannings de visite et la saisie des rapports de visite, le **GRETA Est Bretagne**  envisage de l'informatiser la gestion des stages, en stockant dans une base de données, les informations sur ceux-ci, et les coordonnées des entreprises, administrations et organisations.

Ce système devra permettre de :

* Aux stagiaires de formation continu de renseigner dans une base de données concernant les informations inhérentes à leurs périodes de stages.

* Aux tuteurs de l’entreprise, ainsi que ceux du centre de formation, d’organiser leurs visites de stagiaires et aussi d’y associer un rapport de visite.

* À l’administration du centre de formation de gérer la base de données et de sortir des états de situation de stages, de visites, de listes d’entreprise aux cours des années précédente en fonction de thématiques, etc… 

Le vecteur de communication sera un site WEB pour les utilisateurs et une application développée en JAVA pour l’administrateur.

----

## Cahier des charges.

Un formulaire en ligne devra être rempli par les stagiaires, concernant les données du stage :
*	Lieu
	*	Nom Entreprise,
	*	Adresse
		*	Rue
		*	Ville
	*	Téléphone
	*	Tuteur entreprise
	*	Thème du stage
*	Date de stage
	*	Début
	*	Fin
*	Tuteur centre de formation
	*	Nom
	*	Prénom
	*	Téléphone
*	Descriptif rapide du stage

Pour le Tuteur de l’entreprise :
*	Avoir accès à la fiche remplie par le stagiaire ainsi que la date de visite prévue par le Tuteur du centre de formation.

Pour les Tuteurs du centre de formation :
*	Liste de stagiaires affectés
*	Possibilité d’affecter des dates de visite de stagiaires
*	Possibilité de rédiger un compte rendu de visite

Apparaîtra le ou les dates de visites du tuteur centre de formation.
Le client léger WEB devra être accessible par un identifiant plus mot de passe.

L’administration de la base de données des stages se fera par le biais d’un client lourd installé sur un PC qui aura accès à la base de données.
Les fonctions principales devront être :
*	L’ajout et la suppression de stagiaires
*	L’ajout et la suppression de tuteurs (entreprise et centre de formation)
*	L’ajout et la suppression d’entreprises
*	Édition d’état concernant
	*	Les visites effectuées et celles non faîtes
	*	Liste de stages filtrés par lieux géographiques, par thématique
	*	Comptes rendus de visite par stagiaires
	
![architecture.jpg]({{site.url}}/content/architecture.jpg)

Pour le développement de ce projet, le **GRETA Est Bretagne** a fait appel au prestataire **Saint-Malo DLIS** (Développement Logiciel et Intégration Systèmes), une Entreprise de Services du Numérique (ESN), anciennement nommée Société de Service en Ingénierie Informatique (SSII).

----

## 1 Spécifications

### 1.1 Diagramme des cas d'utilisations
<a class="example-image-link" href="{{site.url}}/content/UML.png" data-lightbox="example-set" data-title="Diagramme des cas d'utilisations en uml."><img class="example-image" src="{{site.url}}/content/UML.png" alt="Diagramme des cas d'utilisations en uml"></a>
![Diagramme des cas d'utilisations en uml]({{site.url}}/content/UML.png)

### 1.2 Modèle conceptuel de données
![Modèle conceptuel de données]({{site.url}}/content/MCD.png)





