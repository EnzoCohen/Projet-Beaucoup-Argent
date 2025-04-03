import { Router } from "express";
import { rdvRepository } from "./rdvRepository";
import { adresseRepository } from "../adresse/adresseRepository";

export const rdvController = Router()

rdvController.get('/tech/:id', async (req, res) => {
    try {
        const rdvs = await rdvRepository.findBy({
            Technicien: {
                id: Number(req.params.id)
            }

        })
        res.status(200).json({
            rdvs
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Erreur lors de la récupération des rdvs"
        })
    }


})



rdvController.post('/', async (req, res) => {
    try {
        // Extraction des données du corps de la requête
        const { details, dateDebut, dateFin, client, technicien, ville, pays, rue, numero, batiment } = req.body;

        // Vérification si l'adresse existe déjà
        let adresse = await adresseRepository.findOneBy({ ville, pays, rue, numero, batiment });

        // Création d'une nouvelle adresse si elle n'existe pas
        if (!adresse) {
            const newAdresse = await adresseRepository.save({ ville, pays, rue, numero, batiment });
            adresse = newAdresse; // Mise à jour de la variable pour l'utiliser plus tard
        }

        // Création du rendez-vous
        const rdv = { details, dateDebut, dateFin, client, technicien, adresse };

        // Enregistrement du rendez-vous dans la base de données
        await rdvRepository.save(rdv);
        // Réponse au client avec un statut 201 (créé)
        res.status(201).json({ rdv });

    } catch (error) {
        console.error("Erreur lors de la création du rendez-vous :", error);
        res.status(500).json({ error: "Erreur interne du serveur lors de la création du rdv" });
    }
});
