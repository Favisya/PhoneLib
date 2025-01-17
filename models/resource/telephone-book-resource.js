import Database from '../Database.js';

export default class TelephoneBookResource {
    async getTelephoneBookByType(type) {
        const res = await Database.makeQuery(
            'SELECT id, phone_number as phonenumber, type, name FROM phone_numbers WHERE type = $1',
            [type]
        );

        return res.rows;
    }

    async getTelephoneBook() {
        const res = await Database.makeQuery('SELECT id, phone_number as phonenumber, type , name FROM phone_numbers');

        return res.rows;
    }

    async addPhone(params) {
        await Database.makeQuery(`INSERT INTO phone_numbers (name, phone_number, type) VALUES ($1, $2, $3)`,
            [params.name, params.number, params.type])
    }

    async deletePhone(id) {
        await Database.makeQuery(`DELETE FROM phone_numbers WHERE id = $1`, [id])
    }

    async getPhoneById(id) {
        const res = await Database.makeQuery(
            `SELECT phone_number as phonenumber, name FROM phone_numbers WHERE id = $1`,
            [id]
        )

        console.log(res.rows)
        return res.rows;
    }

    async updatePhone(params, id) {
        await Database.makeQuery(
            `UPDATE phone_numbers set name = $1, phone_number = $2, type = $3 WHERE id = $4`,
            [params.name, params.number, params.type, id]
        )
    }
}