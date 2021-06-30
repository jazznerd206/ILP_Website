import Server from './server';
import { Signal } from 'typed-signals';
import { createServer } from 'http';
import config from './config';

const app = new Server().bootstrap();
const server = createServer(app);
  
server.listen(config.PORT);
server.on('listening', onSuccess);
server.on('error', onError);

let string = new Signal<(s: string) => void>();
let connection = string.connect((s)=> console.log(`${s}`));
function onSuccess() {
    string.emit(`🚀  server listening` );
    connection.disconnect();
  }
  
function onError(error: any) {
    string.emit(`There was an error.`);
    console.log(error);
    connection.disconnect();
  }