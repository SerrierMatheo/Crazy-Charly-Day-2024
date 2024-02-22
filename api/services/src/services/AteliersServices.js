import axios from "axios";
import knex from "knex";
import knexConfig from '../configs/db.config.js'

const directusURL = 'http://directus:8055/graphql';

class AteliersServices {
    async getAteliers() {
        const query = `
        query Atelier {
            Atelier {
                id
                nom
                description
                thematique
                date_debut
                date_fin
                nb_places_totales
                nb_places_dispo
            }
        }
    `;

        try {
            const response = await axios({
                method: "post",
                url: directusURL,
                data: {
                    query: query
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            return response.data;
        } catch (error) {
            console.error("Erreur Axios :", error.response ? error.response.data : error.message);
            throw error;
        }
    }

    async getAtelierById(id){
        const query = `
        query Atelier_by_id {
            Atelier_by_id(id: ${id}) {
                id
                nom
                description
                thematique
                date_debut
                date_fin
                nb_places_totales
                nb_places_dispo
            }
        }       
    `;

        try {
            const response = await axios({
                method: "post",
                url: directusURL,
                data: {
                    query: query
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response.data;
        } catch (error) {
            console.error("Erreur Axios :", error.response ? error.response.data : error.message);
            throw error;
        }
    }

    async createAtelier(req, res, next) {
        const { nom, description, thematique, date_debut, date_fin, nb_places_totales } = req.body;

        const mutation = `
        mutation CreateAtelier {
            createAtelier(data: {
                nom: "${nom}"
                description: "${description}"
                thematique: "${thematique}"
                date_debut: "${date_debut}"
                date_fin: "${date_fin}"
                nb_places_totales: ${nb_places_totales}
                nb_places_dispo: ${nb_places_totales}  // Assuming all places are initially available
            }) {
                id
                nom
                description
                thematique
                date_debut
                date_fin
                nb_places_totales
                nb_places_dispo
            }
        }
    `;

        try {
            const response = await axios({
                method: "post",
                url: directusURL,
                data: {
                    query: mutation
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            res.json(response.data.data.createAtelier);
        } catch (error) {
            console.error("Erreur Axios :", error.response ? error.response.data : error.message);
            res.status(500).json({ error: 'Internal Server Error' });
            next(500);
        }
    }

}

export default AteliersServices;