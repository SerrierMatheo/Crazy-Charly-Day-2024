import express from 'express';
import AteliersServices from "../services/AteliersServices.js";
import AteliersAction from "../actions/ateliersAction.js";

import UsersServices from "../services/UsersServices.js";
import userAction from "../actions/userAction.js";

const router = express.Router();

const ateliersService = new AteliersServices();
const ateliersAction = new AteliersAction(ateliersService);

const usersServices = new UsersServices();
const usersAction = new userAction(usersServices);

//récupère la liste des série disponible -> choix de la série à la creation de la partie
router
    .route("/ateliers")
    .get(ateliersAction.listerAteliers.bind(ateliersAction))
    .all((req, res, next) => next(405));

router
    .route("/ateliers/:id")
    .get(ateliersAction.getAtelierByID.bind(ateliersAction))
    .all((req, res, next) => next(405));

router
    .route("/users")
    .get(usersAction.getUser.bind(usersAction))
    .all((req, res, next) => next(405));

export default router;