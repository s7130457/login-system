import mysql from 'mysql';
// import knex from 'knex';

const user = 'root'
const password = 'root'

let knexConfig = {
    client: 'mysql',
    connection: {
        host    : '127.0.0.1:3306',
        user    : user,
        password: password,
        database: 'company'
    }
}
const knex = require('knex')(knexConfig)
function createUser() {
    return knex.schema.withSchema('public').createTableIfNotExists('user', (table) => {
            table.increments('userId')
            table.string('userAccount')
            table.password('userPassword')
            table.string('userName')
            table.dateTime('createTime')
            console.log('in createUser SQL');
            
        })
        .catch( err => {
            console.log('error happen');
            console.log(err);
            return
        })
}

module.exports = {createUser}