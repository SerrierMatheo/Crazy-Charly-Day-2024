export default class userAction {
    #_service;

    constructor(service) {
        this.#_service = service;
    }

    async getUser(req, res, next) {
        const email = req.body.email;
        console.log(email);
        try {
            const user = await this.#_service.getUser(email);
            console.log(user);
            res.json(user); // Return the user directly, not response.data
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
            next(500);
        }
    }
}
