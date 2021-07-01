import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import "reflect-metadata";
import signale from "signale";
import { runInThisContext } from "vm";

export default class Server {

    private app: Application;
    private port: number;
    private mWare: any;
    private routes: any;

    public constructor(PORT: number) {
        this.app = express();
        this.port = PORT;
        this.configureMiddleware();
        this.controllersConfiguration();
        this.assets();
    }

    public bootstrap(): Application {
        signale.success("this.app: " + this.app);
        return this.app;
    }

    private assets() {
        this.app.use(express.static("public"));
        this.app.use(express.static("views"));
    }

    private controllersConfiguration(): any {
        return {
            controllers: [`${__dirname}/controllers/*.controller.{ts,js}`],
            cors: true
        };
    }
    private configureMiddleware(): void {
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan("dev"));
    }
}
