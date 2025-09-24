import express from "express";

import path from "path";
import cors from "cors";

 import {router as incripcionesRouter} from '../routes/inscripciones';

class Server {
    private port: number;
    private app: express.Application;


    constructor(){
        this.port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        this.app = express();

    }

    middlewares(){
        this.app.use(cors({
            origin: ['http://localhost:4321', 'https://evento-minero-eme-hwmi.vercel.app','https://www.eventoeme.com']
        }));
        this.app.use(express.json());
        this.app.use(express.static(path.resolve(__dirname, "../../public")));
    }


    routes(){
        this.app.use('/api',incripcionesRouter)
    }

    start(){

        this.middlewares();

        this.routes()

        this.app.listen(this.port, () => {
            console.log(`Server is running at http://localhost:${this.port}!`);
        });
    }
}


export const server = new Server();