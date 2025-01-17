import Controller from './controller.js';
import TelephoneBookResource from '../models/resource/telephone-book-resource.js';
import View from '../views/view.js';

export default class TelephoneBookByTypeController extends Controller {
    async getHandler(req, res) {
        const telephoneBookResource = new TelephoneBookResource();

        const type = req.query.type;
        const telephoneBook = await telephoneBookResource.getTelephoneBookByType(type);
        const view = new View();


        view.setTemplate('telephone-book')
            .setData(telephoneBook)

        this.render(res, view)
    }

    async postHandler(req, res) {
        const telephoneBookResource = new TelephoneBookResource();

        const type = req.query.type;
        const telephoneBook = await telephoneBookResource.getTelephoneBookByType(type);
        const view = new View();

        view.setTemplate('telephone-book')
            .setData(telephoneBook)

        this.render(res, view)
    }
}