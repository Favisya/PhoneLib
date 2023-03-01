import Router from './router.js';
import TelephoneBookController from '../controllers/telephone-book-controller.js';
import DeleteNumber from '../controllers/telephone-book-controller-delete.js';
import AddNumber from '../controllers/telephone-book-controller-add.js';
import EditNumber from '../controllers/telephone-book-controller-edit.js';

const addNumberController = new AddNumber();
const deleteNumberController = new DeleteNumber();
const editNumberController = new EditNumber();
const telephoneBookController = new TelephoneBookController();

export default class TelephoneBookRouter extends Router {
    constructor() {
        super();

        this._routes = [{
            path: '/telephone-book',
            controller: telephoneBookController,
            method: 'get',
        },
        {
            path: '/telephone-book-delete',
            controller: deleteNumberController,
            method: 'get',
        },
        {
            path: '/telephone-book-add',
            controller: addNumberController,
            method: 'get',
        },
        {
            path: '/telephone-book-add',
            controller: addNumberController,
            method: 'post',
        },
        {
            path: '/telephone-book-edit',
            controller: editNumberController,
            method: 'get',
        },
        {
            path: '/telephone-book-edit',
            controller: editNumberController,
            method: 'post',
        }
        ]

        this.createRoutes();
    }
}