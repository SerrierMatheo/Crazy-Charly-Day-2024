export class Candidat {
    constructor(nom, preferences, nombreAteliers) {
        this.nom = nom;
        // tableau des preferences decroissantes
        this.preferences = preferences;
        this.nombreAteliers = nombreAteliers;
    }
}

export class Atelier {
    constructor(id, theme, placesDisponibles) {
        this.id = id;
        this.theme = theme;
        this.placesDisponibles = placesDisponibles;
    }
}

export class Affectation {
    constructor() {
        this.affectations = {};
    }

    ajouterAffectation(candidat, atelier) {
        if (!this.affectations[atelier.id]) {
            this.affectations[atelier.id] = [];
        }
        this.affectations[atelier.id].push(candidat);
    }
}
