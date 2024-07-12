Documentation de l'API : Theo Roblin
Endpoints pour les Factures (Bills)
Récupérer toutes les factures

URL : /api/bills

Méthode : GET

Description : Récupère toutes les factures.

Réponse :

    200 OK : Renvoie un tableau d'objets facture.
    500 Internal Server Error : Erreur de serveur lors de la lecture du fichier.

Récupérer une facture par ID

URL : /api/bills/:id

Méthode : GET

Description : Récupère une facture spécifique par ID.

Paramètres :

    id : ID de la facture.

Réponse :

    200 OK : Renvoie l'objet facture correspondant.
    404 Not Found : La facture n'existe pas.
    500 Internal Server Error : Erreur de serveur lors de la lecture du fichier.

Modifier une facture

URL : /api/bills/:id

Méthode : PATCH

Description : Modifie une facture existante.

Paramètres :

    id : ID de la facture à modifier.

Corps de la requête :

    JSON contenant les champs à modifier.

Réponse :

    200 OK : Renvoie l'objet facture mis à jour.
    500 Internal Server Error : Erreur de serveur lors de la lecture ou de l'écriture du fichier.

Ajouter une nouvelle facture

URL : /api/bills

Méthode : POST

Description : Ajoute une nouvelle facture.

Corps de la requête :

    JSON contenant les informations de la nouvelle facture.

Réponse :

    200 OK : Renvoie l'objet facture créé.
    500 Internal Server Error : Erreur de serveur lors de la lecture ou de l'écriture du fichier.

Supprimer une facture

URL : /api/bills/:id

Méthode : DELETE

Description : Supprime une facture existante.

Paramètres :

    id : ID de la facture à supprimer.

Réponse :

    200 OK : Suppression réussie.
    500 Internal Server Error : Erreur de serveur lors de la lecture ou de l'écriture du fichier.

Endpoints pour les Clients
Récupérer tous les clients

URL : /api/clients

Méthode : GET

Description : Récupère tous les clients.

Réponse :

    200 OK : Renvoie un tableau d'objets client.
    500 Internal Server Error : Erreur de serveur lors de la lecture du fichier.

Récupérer un client par ID

URL : /api/clients/:id

Méthode : GET

Description : Récupère un client spécifique par ID.

Paramètres :

    id : ID du client.

Réponse :

    200 OK : Renvoie l'objet client correspondant.
    404 Not Found : Le client n'existe pas.
    500 Internal Server Error : Erreur de serveur lors de la lecture du fichier.

Modifier un client

URL : /api/clients/:id

Méthode : PATCH

Description : Modifie un client existant.

Paramètres :

    id : ID du client à modifier.

Corps de la requête :

    JSON contenant les champs à modifier.

Réponse :

    200 OK : Renvoie l'objet client mis à jour.
    500 Internal Server Error : Erreur de serveur lors de la lecture ou de l'écriture du fichier.

Ajouter un nouveau client

URL : /api/clients

Méthode : POST

Description : Ajoute un nouveau client.

Corps de la requête :

    JSON contenant les informations du nouveau client.

Réponse :

    200 OK : Renvoie l'objet client créé.
    500 Internal Server Error : Erreur de serveur lors de la lecture ou de l'écriture du fichier.

Supprimer un client

URL : /api/clients/:id

Méthode : DELETE

Description : Supprime un client existant.

Paramètres :

    id : ID du client à supprimer.

Réponse :

    200 OK : Suppression réussie.
    500 Internal Server Error : Erreur de serveur lors de la lecture ou de l'écriture du fichier.