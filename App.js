import express from 'express'
import TelephoneBookRouter from './routers/telephone-book-router.js';
import { Liquid } from 'liquidjs';
import * as path from 'path';
import bodyParser from 'body-parser';

export default class App {
    static _port = 8090;
    static _app = null;

    static initServer() {
        this._app = express();
        this._app.listen(this._port);
        this._app.use('/css', express.static(__dirname + '/css'));
    }

    static initRoutes() {
        const routers = [
            TelephoneBookRouter,
        ];

        routers.forEach(Router => {
            const router = new Router()

            this.initRouter(router.getRouter())
        })
    }

    static initBodyParser() {
        this._app.use(bodyParser.urlencoded({ extended: true }))
        this._app.use(bodyParser.json())
    }


    static initRouter (router) {
        if (!this._app) {
            return
        }

        this._app.use(router);
    }


    static initLiquid() {
        const engine = new Liquid();
        this._app.engine('liquid', engine.express());
        this._app.set('views', path.resolve(__dirname, 'templates'));
        this._app.set('view engine', 'liquid');
    }
}