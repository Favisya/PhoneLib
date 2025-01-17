import pg from 'pg'

export default class Database {
    static connection = null;

    static async getConnection() {
        if (this.connection) {
            return this.connection;
        }

        const { Client } = pg
        this.connection = new Client({
            user:     'root',
            port:     '5432',
            host:     'localhost',
            password: 'password',
            database: 'phone_lib'
        });

        this.connection.connect();

        return this.connection;
    }

    static async makeQuery(query, params) {
        const connection = await this.getConnection();

        return connection.query(query, params);
    }
}
