import Controller from './controller.js';
import TelephoneBookResource from '../models/resource/telephone-book-resource.js';

export default class DeleteNumberController extends Controller {
    async getHandler(req, res) {
        const id = req.query.id;

        const telephoneBookResource = new TelephoneBookResource();
        await telephoneBookResource.deletePhone(id);
        res.redirect('/telephone-book')
    }
}