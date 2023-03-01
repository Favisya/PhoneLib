export default class Controller {
    execute(req, res) {
        if (req.method.toUpperCase() === 'GET') {
            this.getHandler(req, res);
        }

        if (req.method.toUpperCase() === 'POST') {
            this.postHandler(req, res);
        }

        if (req.method.toUpperCase() === 'DELETE') {
            this.deleteHandler(req, res);
        }

        if (req.method.toUpperCase() === 'PUT') {
            this.putHandler(req, res);
        }
    }

    getHandler(req, res) {}
    postHandler(req, res) {}
    putHandler(req, res) {}
    deleteHandler(req, res) {}

    render(res, view) {
        res.render(view.getTemplate(), {
            'data': view.getData(),
        });
    }
}
