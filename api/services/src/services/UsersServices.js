import knex from "knex";
import knexConfig from '../configs/db.config.js'

const db = knex(knexConfig);

class UsersServices {

    async getUser(email) {
        try {
            const user = await db('users').select('*').where('email', '=', email).first();
            console.log(user);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UsersServices;