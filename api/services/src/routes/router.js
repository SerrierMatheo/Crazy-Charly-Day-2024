import express from 'express';
import SeriesServices from "../services/SeriesServices.js";
import SeriesAction from "../actions/seriesAction.js";

import PartiesServices from "../services/partiesServices.js";
import PartiesAction from "../actions/partiesAction.js";

const router = express.Router();

const seriesService = new SeriesServices();
const seriesAction = new SeriesAction(seriesService);

const partyServices = new PartiesServices();
const partyAction = new PartiesAction(partyServices);

//récupère la liste des série disponible -> choix de la série à la creation de la partie
router
    .route("/series")
    .get(seriesAction.listerSeries.bind(seriesAction))
    .all((req, res, next) => next(405));

//post pour créer la partie -> penser à fournir la série nécéssaire pour la création
//réponse du post contient les data de la partie(token + liste de 10 items)
//patch pour changer le statue de la partie ->CREATED ->IN PROGRESS ->FINISHED + SCORE à mettre à jour
router
    .route("/party")
    .post(partyAction.createParty.bind(partyAction))
    .patch(partyAction.updatePartyStatus.bind(partyAction))
    .all((req, res, next) => next(405));



export default router;