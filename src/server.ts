import config from 'config';
import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { CSGOController } from './controllers/csgo';
import { AuthController } from './controllers/auth';


export class SetupServer extends Server {
    constructor() {
        super(config.get('app.env') === 'development');
        this.setup();
    }

    public setup(): void {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private setupControllers(): void {
        const csgoController = new CSGOController();
        const authController = new AuthController();

        super.addControllers([
            csgoController,
            authController
        ]);
    }

    public start(port: number = 3333): void {
        this.app.listen(port, () => {
            Logger.Imp(`Server listening on port: ${port}`);
        });
    }
}