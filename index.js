import App from './App.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);


App.initServer();
App.initLiquid();
App.initBodyParser();
App.initRoutes();
