import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

var corsOptions = {
  origin: ["http://localhost:8080","http://127.0.0.1:8080", "http://localhost:8081"]
};

const app: Express = express();
const port = "8081";
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import {route} from './routes/routes'
route(app);
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});