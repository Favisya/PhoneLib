import Controller from './controller.js';
import TelephoneBookResource from '../models/resource/telephone-book-resource.js';
import View from '../views/view.js';

export default class TelephoneBookController extends Controller {
    async getHandler(req, res) {
        const telephoneBookResource = new TelephoneBookResource();
        const telephoneBook = await telephoneBookResource.getTelephoneBook();

        const view = new View();

        view.setTemplate('telephone-book')
            .setData(telephoneBook)

        this.render(res, view)
    }

    async deleteHandler(req, res) {
        const id = req.query.id;
        console.log(id)

        const view = new View();

        const telephoneBookResource = new TelephoneBookResource();
        const telephoneBook = await telephoneBookResource.getTelephoneBook();

        view.setTemplate('telephone-book')
            .setData(telephoneBook)

        await telephoneBookResource.deletePhone(id);
        res.redirect('/telephone-book')
    }
}