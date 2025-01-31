![separe](src/main/resources/Images/Logo.png)
# Projet HELP ORT [![Version](https://img.shields.io/badge/Version-4.1.2-gold)]()

# Description

Projet helpOrt

Bienvenue dans le projet helpOrt, 

une application dédiée à l'entraide entre élèves. La base de données utilisée est nommée "projet_help_ort".
Ce projet est livré avec une architecture Docker prête à l'emploi, comprenant les éléments suivants :
- Une base de donnée MariaDb
- PHPMyAdmin


## Initiation 
- Utilisez la commande suivante pour démarrer les containers Docker :
```bash
docker compose up -d
```

- Importer la base de données "projet_help_ort", il se trouve dans `tools` à la racine du projet.


- Importer le connector MySQL en focntion de vos besoins. Les connectors se trouvent dans `tools` à la racine du projet.
    - Xamp  : `mysql-connector-java-5.1.48.jar`
    - Docker : `mysql-connector-java-8.0.30.jar`,


- Modifier le pilote se situant dans `src/main/java/sio/projet_helport/Index/ConnexionBDD.java` en focntion :
    - Docker : `ligne 22`
    - Xamp : `ligne 23`
## Connexion
- Utilisez les identifiants suivants pour vous connecter à PHPMyAdmin :
    - root
    - Pas de mot de passe
- Utilisez les identifiants suivants pour vous connecter en tant qu'utilisateur :
    - Utilisateur : `FPELTIER`
    - Mot de passe : `AZERTYazerty51!`
    - Utilisateur : `EBERTRAND9442`
    - Mot de passe : `AZERTYazerty51!`
    - Utilisateur : `JBOULLAM`
    - Mot de passe : `AZERTYazerty51!`
- Utilisez les identifiants suivants pour vous connecter en tant qu'administrateur :
    - Utilisateur : `BDAN`
    - Mot de passe : `AZERTYazerty51!`

## Fonctionnalités
- Création d'un compte uniquement uniquement USER.
- Connexion à un compte utilisateur ou administrateur.
- Faire des demandes d'aides en tant qu'utilisateur.
- Faire des soutiens en tant qu'utilisateur.
- ajouter une matière en tant qu'administrateur.
- ajouter une salle en tant qu'administrateur.
- accepter les demandes de soutien en tant qu'administrateur.

## Technologies utilisées
- Java
- MariaDB
- Docker
- PHPMyAdmin
- Maven
- Fxml
- API
- Mailer

## Auteurs
- Ce projet a été réalisé par deux étudiants de la classe de BTS SIO 2ème année à l'ORT Montreuil :
    - Odiya
    - Enzo


    
