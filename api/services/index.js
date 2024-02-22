import express from 'express';
import helmet from "helmet";
import cors from "cors";

import router from './src/routes/router.js';

import catch404errors from "./src/middlewares/catch404errors.js";
import catchAllErrors from "./src/middlewares/catchAllErrors.js";

const app = express();

app.use(helmet()); //sécurité
app.use(cors()); // cors
app.use(express.json()); //parse les données json
app.use(express.urlencoded({ extended: false })); //parse les données provenant de formulaire



app.get('/', (req, res) => {
    res.json({'message': 'Welcome on cooking-booking api!'});
})

app.use(catch404errors);
app.use(catchAllErrors);

export default app;


