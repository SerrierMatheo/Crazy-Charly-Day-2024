export class Candidat {
    constructor(nom, preferences, nombreAteliers) {
        this.nom = nom;
        this.nbAffect = 0;
        // tableau des preferences decroissantes
        this.preferences = preferences;
        this.nombreAteliers = nombreAteliers;
    }

    getScorePreference(theme) {
        let score = 10;
        for (let preference of this.preferences) {
            if (preference === theme) {
                return score;
            } else {
                score -= 2;
                if (score < 2) {
                    score = 1;
                }
            }
        }
    }
}

export class Atelier {
    constructor(id, theme, placesDisponibles) {
        this.id = id;
        this.theme = theme;
        this.placesDisponibles = placesDisponibles;
    }
    affecter() {
        this.placesDisponibles--;
    }

}

export class Affectation {
    constructor() {
        this.affectations = {};
        this.nbAffectation = 0;
    }

    ajouterAffectation(candidat, idAtelier) {
        if (!this.affectations[idAtelier.id]) {
            this.affectations[idAtelier.id] = [];
        }
        this.affectations[idAtelier.id].push(candidat);
        this.nbAffectation++;
        candidat.nbAffect++;
    }
    estAffecte(id) {
        if (this.affectations[id]) {
            return true;
        }
        return false;
    }
    nbAffectationCandidat(nom) {
        let res = 0;
        for (let candidats of this.affectations) {
            for (let candidat of candidats) {
                if (candidat.nom === nom) {
                    res++;
                }
            }

        }
        return res;
    }

    copieAffectation() {
        let copy = new Affectation();

        for (let idAtelier in this.affectations) {
            copy.affectations[idAtelier] = [...this.affectations[idAtelier]];
        }
        copy.nbAffectation = this.nbAffectation;
        return copy;
    }
}
