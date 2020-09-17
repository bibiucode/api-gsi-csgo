import { SetupServer } from './server';
import config from 'config';

(async (): Promise<void> => {
    const server = new SetupServer();
    await server.setup();
    server.start(config.get('app.port'));
})();