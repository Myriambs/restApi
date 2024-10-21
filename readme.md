Projet : Afficher une liste d'utilisateurs à partir d'une API REST
Objectif

Ce projet consiste à récupérer une liste d'utilisateurs depuis une API externe, à l'aide de Axios, et à afficher cette liste sur une page web en utilisant JavaScript et HTML.
Structure du Projet
1. HTML (index.html)

Le fichier HTML contient une structure de base avec un bouton pour déclencher l'appel à l'API, et une liste non ordonnée (ul) où les utilisateurs récupérés seront affichés.

    <button id="fetchProduits"> : Un bouton qui permet, lors du clic, de récupérer les utilisateurs depuis l'API et de les afficher.
    <ul id="List_Product"> : Un élément ul (liste non ordonnée) où les utilisateurs récupérés seront ajoutés sous forme d'éléments li (éléments de liste).

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rest API</title>
    <!-- Inclusion de la librairie Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
    <h2>Liste des utilisateurs :</h2>
    <hr/>
    <!-- Bouton pour récupérer les utilisateurs -->
    <button id="fetchProduits">Afficher les utilisateurs</button>
    
    <!-- Liste qui sera remplie par les utilisateurs récupérés -->
    <ul id="List_Product"></ul>

    <!-- Lien vers le fichier JavaScript -->
    <script src="./index.js"></script>
</body>
</html>


2. JavaScript (index.js)

Le fichier JavaScript contient le code qui gère l'interaction avec l'API et met à jour la page HTML avec les données récupérées.
2.1. Sélection des éléments du DOM

    btn : Sélectionne le bouton qui déclenche l'appel à l'API lorsque l'utilisateur clique dessus.
    userList : Sélectionne la liste ul où les éléments li représentant chaque utilisateur seront ajoutés.  

    const btn = document.getElementById('fetchProduits')
console.log('button=>', btn)

const userList = document.getElementById('List_Product')
console.log('ul list produit =>', userList)
  2.2. Ajout d'un écouteur d'événement (Event Listener)

Un écouteur d'événement est ajouté au bouton pour exécuter une fonction lorsqu'il est cliqué. Cette fonction envoie une requête GET à une API pour récupérer la liste des utilisateurs.

btn.addEventListener('click', () => {
    const URLApi = "https://jsonplaceholder.typicode.com/users";

    // Requête GET pour récupérer les données des utilisateurs
    axios.get(URLApi)
        .then(function(res) {
            const users = res.data;
            userList.innerHTML = ''; // Réinitialiser la liste des utilisateurs

            // Itérer sur chaque utilisateur et ajouter à la liste
            users.map((el) => {
                const list = document.createElement('li');
                list.textContent = `${el.name} _ ${el.email}`;
                userList.appendChild(list); // Ajouter l'élément à la liste `ul`
            });
        })
        .catch(err => console.log(err)); // Gestion des erreurs
});


2.3. Explication du code Axios

    axios.get(URLApi) : Effectue une requête GET à l'API https://jsonplaceholder.typicode.com/users.
    res.data : Contient les données récupérées, qui sont des informations sur les utilisateurs.
    map() : Parcourt la liste des utilisateurs et crée un élément li pour chaque utilisateur avec son nom et son email.
    userList.appendChild(list) : Ajoute chaque utilisateur sous forme d'élément li dans la liste ul.

3. Explication de l'API

L'API utilisée dans cet exemple est https://jsonplaceholder.typicode.com/users. C'est une API de démonstration qui retourne une liste de faux utilisateurs. Chacun de ces utilisateurs a un nom et une adresse e-mail.
4. Fonctionnement

    L'utilisateur clique sur le bouton "Afficher les utilisateurs".
    Le code JavaScript envoie une requête à l'API pour récupérer les utilisateurs.
    Les utilisateurs récupérés sont affichés dans une liste HTML (ul), chaque utilisateur ayant un élément de liste (li) avec son nom et son adresse e-mail.

5. Installation et Exécution

Aucun prérequis particulier n'est nécessaire pour exécuter ce projet. Vous pouvez simplement ouvrir le fichier index.html dans votre navigateur pour voir le résultat.

    Ouvrez le fichier index.html dans un navigateur.
    Cliquez sur le bouton "Afficher les utilisateurs".
    Les utilisateurs récupérés depuis l'API apparaîtront dans la liste.

    Exemple visuel

Avant de cliquer sur le bouton :

markdown

List of users:
------------------

Après avoir cliqué sur le bouton :

sql

List of users:
------------------
Leanne Graham _ Sincere@april.biz
Ervin Howell _ Shanna@melissa.tv
Clementine Bauch _ Nathan@yesenia.net

Conclusion

Cet exemple permet à vos étudiants de comprendre comment utiliser Axios pour effectuer des requêtes HTTP vers une API REST, récupérer des données, et les manipuler dynamiquement dans une page web. Ils peuvent expérimenter avec différents types d'API ou ajouter des fonctionnalités supplémentaires (comme des boutons pour trier les utilisateurs, etc.).
