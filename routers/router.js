import express from 'express';

export default class Router {
    _routes = []

    constructor() {
        this.router = express.Router();
    }

    createRoutes() {
        this._routes.forEach(({ path, controller, method }) => {
            if (method === 'post') {
                this.router.post(path, controller.execute.bind(controller));
            } else if (method === 'get') {
                this.router.get(path, controller.execute.bind(controller));
            } else if (method === 'put') {
                this.router.put(path, controller.execute.bind(controller));
            } else if (method === 'delete') {
                this.router.delete(path, controller.execute.bind(controller));
            }
        })
    }

    getRouter() {
        return this.router;
    }
}
