import Controller from './controller.js';
import View from '../views/view.js';
import TelephoneBookResource from '../models/resource/telephone-book-resource.js';

export default class AddNumberController extends Controller {
    getHandler(req, res) {
        const view = new View();
        view.setTemplate('add-number');

        this.render(res, view)
    }

    async postHandler(req, res) {
        const params = req.body;

        const telephoneBookResource = new TelephoneBookResource();
        await telephoneBookResource.addPhone(params);
        res.redirect('/telephone-book')
    }
}