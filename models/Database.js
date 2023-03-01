import mysql from 'mysql-await';

export default class Database {
    static connection = null;

    static getConnection() {
        if (this.connection) {
            return this.connection;
        }

        this.connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'dima',
            password: 'fuckme420#',
            database: 'telephone_book',
            port: 3307
        })

        this.connection.connect();

        return this.connection;
    }

    static makeQuery(query, params) {
        const connection = this.getConnection();

        return connection.awaitQuery(query, params);
    }
}
