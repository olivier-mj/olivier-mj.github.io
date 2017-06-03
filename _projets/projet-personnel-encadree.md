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
	
<a href="{{site.url}}/content/architecture.jpg" data-featherlight="image">![architecture.jpg]({{site.url}}/content/architecture.jpg)</a>

Pour le développement de ce projet, le **GRETA Est Bretagne** a fait appel au prestataire **Saint-Malo DLIS** (Développement Logiciel et Intégration Systèmes), une Entreprise de Services du Numérique (ESN), anciennement nommée Société de Service en Ingénierie Informatique (SSII).

----

## 1 Spécifications

### 1.1 Diagramme des cas d'utilisations
<a href="{{site.url}}/content/UML.png" data-featherlight="image">![Diagramme des cas d'utilisations en uml]({{site.url}}/content/UML.png)</a>


### 1.2 Modèle conceptuel de données
<a href="{{site.url}}/content/MCD.png" data-featherlight="image">![Modèle conceptuel de données]({{site.url}}/content/MCD.png)</a>

----

## 2 Architecture Applicative

### 2.1	Environement de production

La base de donnée est hébergée sur un S.G.B.D.R. MySQL.
Le site Internet est hébergé sur un serveur Web Apache.
Le client lourd est une application Java pour Windows.

### 2.2	Environement de développement

Développement web avec la plateforme WAMP, avec l'IDE PhpStorm, Atom, Notepad ou Microsoft Visual Studio Code.
Développement en Java sous l'IDE NetBeans.
Modélisation UML avec BOUML.
Modélisation MERISE avec Jmerise.
Logiciel de gestion de version   GitHub.


----


## 3	Missions Envisageables

### 3.1	Client léger (site web)

#### 3.1.1	Mission 1

Le stagiaire saisi les informations de son entreprise d’accueil, qui seront enregistrées dans la base de données.

#### 3.1.2	Mission 2

Le stagiaire modifie ses informations personnelles, les modifications seront enregistrées dans la base de données.

#### 3.1.3	Mission 3
Le stagiaire ajoute et /ou modifie les périodes de stage, les informations seront enregistrées dans la base de données.

#### 3.1.4	Mission 4

Le stagiaire crée une période de stage, qui sera enregistrée dans la base de données.

### 3.2	Client Lourd (JAVA)

#### 3.2.1	Mission 1

Ajouter, modifier et supprimer dans la base de données les données de la table entreprises.

#### 3.2.2	Mission 2

Ajouter, modifier et supprimer dans la base de données les données de la table stagiaires.

#### 3.2.3	Mission 3

Ajouter, modifier et supprimer dans la base de données les données de la table formateur.

#### 3.2.4	Mission 4

Ajouter, modifier et supprimer dans la base de données les données de la table période.




