const config = require('./config');
const resp = require('../config/format');

const knex = require('knex')({
    client: config.client,
    connection: config.connection    
});

module.exports = {
    findUser: async (data) => {
        let result;
        result = await knex('user')
            .select()
            .where('account',data.account);
        return result;
    },
    createUser: async (data) => {
        let result;
        result = await knex('user')
            .insert({
                account: data.account,
                password: data.password,
                userName: data.userName
            });
       
        return result;
    }
};