import knex from "knex";
import knexConfig from '../configs/db.config.js'
import SeriesServices from "../services/SeriesServices.js";
import SeriesAction from "../actions/seriesAction.js";
//import { initializeWebSocketServer,notifyGameCreation } from '../../../websocket.geoquizz/services/notifyService.js';


const db = knex(knexConfig);

class PartiesServices {
    async updatePartyStatus(partyId, nouvelEtat, score){
        await db('parties').where('id', '=', partyId).update({status: nouvelEtat, score: score});
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    async getRandomItems(serie_id){
        const seriesActionInstance = new SeriesAction(new SeriesServices());

        try {
            const serieData = await seriesActionInstance.getSerieByID(serie_id);
            const itemsArray = serieData.data.Series_by_id.Items;
            const shuffledArray = this.shuffleArray([...itemsArray]);

            return shuffledArray.slice(0, 10);
        } catch (error) {
            console.log(error);
        }
    }

    async getParty(id) {
         await db('parties').select('*').where('id', '=', id).first();
    }

    async createParty(serie_id, user_email){
        let token = crypto.randomUUID().toString();
        const randomItems = await this.getRandomItems(serie_id);
        const insertedPartie = await db('parties').insert({
            user_email: user_email,
            serie_id: serie_id,
            status: "CREATED",
            score: 0,
            token: token
        });

        const createdPartie = await db('parties').where('id', insertedPartie[0]).first();
        createdPartie.items = randomItems;

        //notifyGameCreation(createdPartie);

        return createdPartie;
    }

}

export default PartiesServices;