import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';

export default class Server {

    private app: Application = express();

    private readonly controllersConfiguration = {
        controllers: [`${__dirname}/controllers/*.controller.{ts,js}`],
        cors: true
    };

    private configureMiddleware(): void {
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    public bootstrap(): Application {
        this.configureMiddleware();
        return this.app;
    }
}