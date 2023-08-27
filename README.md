# Développement d’un module Odoo de gestion de stock sous forme d’une application web 

###### Le développement d'une application web de gestion de stock repose sur Odoo en tant que progiciel open source de gestion intégrée. Odoo propose un ensemble de modules de base, parmi lesquels le module de gestion des stocks (inventory management),et il peut se connecter directement au différent Api web.



# Structure

- La première étape consiste à personnaliser et créer les interfaces du module de gestion des stocks en utilisant Angular, un framework Web open source reposant sur TypeScript.
- La deuxième partie consiste à mettre en place le back-end de l'application en utilisant des API de type JSON-RPC implémentées en Python, permettant ainsi une interaction avec la base de données d'Odoo. Le schéma ci-dessous explique le principe du back-end :

  1. Installation d'Odoo sur un serveur distinct et utilisation du protocole SSH pour la connexion
  2. Création d'un nouveau module nommé "Gstock" dans Odoo à l'aide de la commande de scaffold. Ce module suit l'architecture MVC. Ensuite, création d'un fichier dans les contrôleurs où tous les API Odoo utilisés dans l'application web sont implémentés.
  3. Mettez en œuvre des API dans le fichier server.py pour agir comme un intermédiaire entre le frontend Angular et le module "Gstock" d'Odoo. Dans ce contexte, le fichier server.py agit comme un pont entre les deux systèmes. Lorsqu'une requête est faite depuis le frontend Angular, elle est dirigée vers le fichier server.py. À partir de là, les API Odoo sont appelées en utilisant des appels appropriés à partir du module "Gstock" dans Odoo. Ces API Odoo traitent les demandes et renvoient les résultats au fichier server.py.

 
 ![alt text](https://user-images.githubusercontent.com/51267601/189491022-c98890ae-fca4-4ca7-b5cc-79fbb79cf7b8.png)

