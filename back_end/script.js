import {Candidat, Atelier, Affectation} from "./classes.js";

let candidat1 = new Candidat("Albert", ["JP", "FR", "OR", "MEX", "IT", "GR"], 3);
let candidat2 = new Candidat("Bertrand", ["OR", "JP", "FR", "IT", "MEX", "GR"], 3);
let candidats = [candidat1, candidat2];
let atelier1 = new Atelier(1,"JP", 2);
let atelier2 = new Atelier(2,"OR", 2);
let ateliers = [atelier1, atelier2];

let nbAteliersImp = 0;


function getAtelierDispo(theme) {
    for(let atelier of ateliers) {
        if (atelier.theme === theme) {
            if (!affectation.estAffecte(atelier.id) && atelier.placesDisponibles > 0) {
                return atelier;
            }
        }
    }
    return undefined;
}

function trouverMeilleurScore() {
    let meilleurScore = -1;
    let meilleurAtelier;
    let meilleurCandidat;

    // on parcourt chaque candidat
    for (let candidat of candidats) {
        let i = 10;
        let score;
        let atelier;
        if (candidat.nombreAteliers > affectation.nbAffectationCandidat(candidat.nom)) {

            // on parcours chaque preference du candidat (triée)
            for (let theme of candidat.preferences) {
                atelier = getAtelierDispo(theme);
                // si un atelier du theme courant existe on calcule son score
                if (atelier !== undefined) {
                    score = i;
                    if (score > meilleurScore) {
                        meilleurScore = score;
                        meilleurAtelier = atelier;
                        meilleurCandidat = candidat;
                    }
                }
                // on augmente le malus
                i -= 2;
                if (i < 2) {
                    i = 1;
                }
            }
        }
    }
    return [meilleurCandidat, meilleurAtelier];
}


function calculerScore(affectationCourante) {
    let score = 0;
    for (let idAtelier in affectationCourante.affectations) {
        let atelier;
        for (let a of ateliers) {
            if (a.id == idAtelier) {
                atelier = a;
            }
        }
        for (let candidat of affectationCourante.affectations[idAtelier]) {
            // + gerer le malus
            score += candidat.getScorePreference(atelier.theme);
        }
        // + gerer les personne non affecté
    }
    return score;
}

function algoGloutonRecursif (candidatsRestants, ateliersRestants, affectationCourante) {
    if (candidatsRestants.length === 0 || ateliersRestants.length === 0) {
        let score = calculerScore(affectationCourante);
        console.log("score")
        return {affectation: affectationCourante, score: score};
    }

    let meilleurResultat = {affectation: [], score: -1};

    for (let candidat of candidatsRestants) {
        if (candidat.nombreAteliers > candidat.nbAffect) {

            for (let atelier of ateliersRestants) {
                if (atelier.placesDisponibles > 0) {

                    let copieAffectation = affectationCourante.copieAffectation()
                    copieAffectation.ajouterAffectation(candidat, atelier);

                    let nouveauxCandidatsRestants = candidatsRestants.filter(c => c !== candidat);
                    let nouveauxAteliersRestants = ateliersRestants.filter(a => a !== atelier);
                    let resultat = algoGloutonRecursif(nouveauxCandidatsRestants, nouveauxAteliersRestants, copieAffectation);

                    if (resultat.score > meilleurResultat.score) {
                        console.log(resultat.score)
                        meilleurResultat = resultat;
                    }
                }
            }
        }
    }

    return meilleurResultat;


}

// while (nbAteliersImp < ateliers.length) {
//     // selectionner la meilleur option disponible
//     let optionMeilleurScore = trouverMeilleurScore(affectation);
//     console.log(optionMeilleurScore)
//
//     //on affecte la solution
//     let candidat = optionMeilleurScore[0];
//     let atelier = optionMeilleurScore[1];
//     affectation.ajouterAffectation(candidat, atelier.id);
//     atelier.affecter();
//     nbAteliersImp++;
//
// }
let affect = new Affectation();
let res = algoGloutonRecursif([...candidats], [...ateliers], affect);
console.log("Score :")
console.log(res[1]);
console.log("Affectations :")
console.log(res[0]);

