import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors'
import routes from './routes'
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(cors({
    origin: "*",
    methods: ['GET,POST,PUT,DELETE']
}))
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado.' });
});

server.listen(process.env.PORT || 2000);