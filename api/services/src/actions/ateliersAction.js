export default class ateliersAction {
    #_service;

    constructor(service) {
        this.#_service = service;
    }

    async listerAteliers(req, res, next) {
        try {
            const series = await this.#_service.getAteliers();
            res.json(series);
        } catch (error) {
            next(500);
        }
    }

    async getAtelierByID(req, res, next) {
        try {
            const id = req.params.id; // Assuming the id is in the request parameters
            const atelier = await this.#_service.getAtelierById(id);
            console.log(atelier);
            res.json(atelier);
        } catch (error) {
            next(500);
        }
    }
}