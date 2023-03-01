import Controller from './controller.js';
import TelephoneBookResource from '../models/resource/telephone-book-resource.js';
import View from '../views/view.js';

export default class EditNumberController extends Controller {
    _id;

    async getHandler(req, res) {
        const id = req.query.id;

        const telephoneBookResource = new TelephoneBookResource();
        const editData = await telephoneBookResource.getPhoneById(id);
        this._id = id;

        const view = new View();
        view.setTemplate('edit-number')
            .setData(editData);

        this.render(res, view)
    }

    async postHandler(req, res) {
        const params = req.body;

        const telephoneBookResource = new TelephoneBookResource();
        await telephoneBookResource.updatePhone(params, this._id);
        res.redirect('/telephone-book')
    }
}