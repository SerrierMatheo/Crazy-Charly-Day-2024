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
}

export default AteliersServices;