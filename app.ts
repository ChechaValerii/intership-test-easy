import express from 'express';
import * as http from 'http';
import cors from 'cors';
import { CommonRoutesConfig } from './common/commonRoutesConfig';
import { CountriesRoutes } from './countries/countriesRoutesConfig';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Array<CommonRoutesConfig> = [];

app.use(express.json());
app.use(cors());

routes.push(new CountriesRoutes(app));

const runningMessage = `Server running at http://localhost:3000`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});
server.listen(3000, () => {
    console.log(runningMessage);
});
