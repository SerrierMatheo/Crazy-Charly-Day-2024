import {Candidat, Atelier, Affectation} from "./classes.js";

let candidat1 = new Candidat("Albert", ["JP", "FR", "OR", "MEX", "IT", "GR"], 3);
let candidat2 = new Candidat("Bertrand", ["OR", "JP", "FR", "IT", "MEX", "GR"], 3);
let atelier1 = new Atelier("JP", 2);
let atelier2 = new Atelier("OR", 2);

let affectation = new Affectation();
affectation.ajouterAffectation(candidat1, atelier1);
affectation.ajouterAffectation(candidat2, atelier2);
