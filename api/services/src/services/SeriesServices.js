import axios from "axios";
import knex from "knex";
import knexConfig from '../configs/db.config.js'

const directusURL = 'http://directus:8055/graphql';

class SeriesServices {
    async getSeries() {
        const query = `
        query series {
            Series {
                title
                difficulty
                description
                coordinates
                maxzoom
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

    async getSerieById(id){
        const query = `
        query Series_by_id {
            Series_by_id(id: ${id}) {
                Items {
                    id
                    image {
                        id
                    }
                    coordinates
                    title
                    description
                }       
                title
                difficulty
                coordinates
                description
                maxzoom
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

export default SeriesServices;