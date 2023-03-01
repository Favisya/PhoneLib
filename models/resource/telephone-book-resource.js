import Database from '../Database.js';

export default class TelephoneBookResource {
    async getTelephoneBook() {
        return await Database.makeQuery('SELECT id, phone_number as phoneNumber, name FROM phone_numbers');
    }

    async addPhone(params) {
        Database.makeQuery(`INSERT INTO phone_numbers (name, phone_number) VALUES (?, ?)`,
            [params.name, params.number])
    }

    async deletePhone(id) {
        Database.makeQuery(`DELETE FROM telephone_book.phone_numbers WHERE id = ?`, id)
    }

    async getPhoneById(id) {
        return await Database.makeQuery(
            `SELECT phone_number as phoneNumber, name FROM phone_numbers WHERE id = ?`,
            id
        )
    }

    async updatePhone(params, id) {
        Database.makeQuery(
            `UPDATE telephone_book.phone_numbers set name = ?, phone_number = ? WHERE id = ?`,
            [params.name, params.number, id]
        )
    }
}