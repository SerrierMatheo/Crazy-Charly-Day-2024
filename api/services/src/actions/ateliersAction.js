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

    async createAteliers(req, res, next) {
        try {
            const { nom, description, thematique, date_debut, date_fin, nb_places_totales } = req.body;

            // Use the createAtelier function to create a new workshop
            const createdAtelier = await this.#_service.createAtelier({
                nom,
                description,
                thematique,
                date_debut,
                date_fin,
                nb_places_totales,
            });

            res.json(createdAtelier);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            next(500);
        }
    }

}