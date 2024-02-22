import knex from "knex";
import knexConfig from '../configs/db.config.js'

const db = knex(knexConfig);

class UsersServices {

    async getUser(email) {
        try {
            const user = await db('users').select('*').where('email', '=', email).first();
            console.log(user);
            return user; // Add this line to return the user object
        } catch (error) {
            throw error; // You might want to handle the error appropriately, or log it
        }
    }
}

export default UsersServices;